import { Request, Response } from 'express';
import { DB } from '@/config/db';
import { SLOT_SCHEMA } from '@/models/slot.models';
import { rawObjToSchema } from '@/utils/transfom';
import { RowDataPacket } from 'mysql2';

export async function getSlots(_: Request, res: Response) {
    try {
        const query = 'SELECT * FROM `slot`';
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const slots = result.map((value) => rawObjToSchema(value, SLOT_SCHEMA));
        res.status(200).json(slots);
    } catch (_) {
        res.status(500).json({ error: "Error fetching slots" });
    }
}
