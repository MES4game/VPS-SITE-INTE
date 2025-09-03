import { Request, Response } from 'express';
import { DB } from '@/config/db';
import { SCORE_SCHEMA } from '@/models/common.models';
import { rawObjToSchema } from '@/utils/transfom';
import { RowDataPacket } from 'mysql2';

export async function getResultScores(_: Request, res: Response) {
    try {
        const query =`
            SELECT \`team_id\`, SUM(\`points\`) AS \`points\`
            FROM (
                SELECT e.\`team_id\`, SUM(e.\`points\` + e.\`bonus\`) AS \`points\`
                FROM \`entry\`e
                GROUP BY e.\`team_id\`

                UNION ALL

                SELECT tdc.\`team_id\`, SUM(c.\`points\` * LEAST(tdc.\`done\`, c.\`max_done\`)) AS \`points\`
                FROM \`team_done_challenge\` tdc
                JOIN \`challenge\` c ON tdc.\`challenge_id\` = c.\`id\`
                GROUP BY tdc.\`team_id\`
            ) AS \`combined\`
            GROUP BY \`team_id\`;
        `;
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const scores = result.map((value) => rawObjToSchema(value, SCORE_SCHEMA));
        res.status(200).json(scores);
    } catch (_) {
        res.status(500).json({ error: "Error fetching challenge scores" });
    }
}
