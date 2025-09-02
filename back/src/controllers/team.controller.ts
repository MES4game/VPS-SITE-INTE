import { Request, Response } from 'express';
import { Team, TEAM_SCHEMA } from '@/models/team.models';
import { rawObjToSchema } from '@/utils/transfom';

export function getTeams(_: Request, res: Response) {
    try {
        const id      : number          = Number(req.params.id);
        const query   : string          = 'SELECT * FROM `categories` WHERE `categoryId` = ?';
        const [result]: [RowDataPacket[], any] = await db.execute(query, [id]);

        if (result.length === 0) { res.status(404).json({ error: "Category not found." }); return; }

        const category: Team = rawObjToSchema(result[0], TEAM_SCHEMA);

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: "Error fetching event's category by it's id :\n" + error });
    }
}
