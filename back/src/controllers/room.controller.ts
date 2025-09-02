import { Request, Response } from 'express';

export function getRooms(_: Request, res: Response) {
    res.status(200).send("OK");
}
