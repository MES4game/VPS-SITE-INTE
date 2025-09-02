import { Request, Response } from 'express';

export function getSlots(_: Request, res: Response) {
    res.status(200).send("OK");
}
