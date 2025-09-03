import { Request, Response } from 'express';
import { DB } from '@/config/db';
import { TEAM_SCHEMA } from '@/models/team.models';
import { rawObjToSchema } from '@/utils/transfom';
import { RowDataPacket } from 'mysql2';

export async function getTeams(_: Request, res: Response) {
    try {
        const query = 'SELECT * FROM `team`';
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const teams = result.map((value) => rawObjToSchema(value, TEAM_SCHEMA));
        res.status(200).json(teams);
    } catch (_) {
        res.status(500).json({ error: "Error fetching teams" });
    }
}
