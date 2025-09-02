import { Request, Response } from 'express';

export function getChallenges(_: Request, res: Response) {
    res.status(200).send("OK");
}

export function getChallengeScores(_: Request, res: Response) {
    res.status(200).send("OK");
}
