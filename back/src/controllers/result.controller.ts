import { Request, Response } from 'express';

export function getResultScores(_: Request, res: Response) {
    res.status(200).send("OK");
}
