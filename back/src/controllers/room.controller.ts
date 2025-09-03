import { Request, Response } from 'express';
import { DB } from '@/config/db';
import { ROOM_SCHEMA } from '@/models/room.models';
import { rawObjToSchema } from '@/utils/transfom';
import { RowDataPacket } from 'mysql2';

export async function getRooms(_: Request, res: Response) {
    try {
        const query = 'SELECT * FROM `room`';
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const rooms = result.map((value) => rawObjToSchema(value, ROOM_SCHEMA));
        res.status(200).json(rooms);
    } catch (_) {
        res.status(500).json({ error: "Error fetching rooms" });
    }
}
