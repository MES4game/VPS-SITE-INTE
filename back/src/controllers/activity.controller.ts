import { Request, Response } from 'express';

export function getActivities(_: Request, res: Response) {
    res.status(200).send("OK");
}

export function getActivity(_: Request, res: Response) {
    res.status(200).send("OK");
}

export function getActivityScores(_: Request, res: Response) {
    res.status(200).send("OK");
}
