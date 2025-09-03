import { Request, Response } from 'express';
import { DB } from '@/config/db';
import { CHALLENGE_SCHEMA } from '@/models/challenge.models';
import { SCORE_SCHEMA } from '@/models/common.models';
import { rawObjToSchema } from '@/utils/transfom';
import { RowDataPacket } from 'mysql2';

export async function getChallenges(_: Request, res: Response) {
    try {
        const query = 'SELECT * FROM `challenge`';
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const challenges = result.map((value) => rawObjToSchema(value, CHALLENGE_SCHEMA));
        res.status(200).json(challenges);
    } catch (_) {
        res.status(500).json({ error: "Error fetching challenges" });
    }
}

export async function getChallengeScores(_: Request, res: Response) {
    try {
        const query ='SELECT tdc.`team_id`, SUM(c.`points` * LEAST(tdc.`done`, c.`max_done`)) AS `points` FROM `team_done_challenge` tdc JOIN `challenge` c ON tdc.`challenge_id` = c.`id` GROUP BY tdc.`team_id`';
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const scores = result.map((value) => rawObjToSchema(value, SCORE_SCHEMA));
        res.status(200).json(scores);
    } catch (_) {
        res.status(500).json({ error: "Error fetching challenge scores" });
    }
}

export async function postChallengeDone(req: Request, res: Response) {
    try {
        const { password } = req.body as { password: string };
        if (password !== process.env.VPS_SITE_BACK_PASS) { res.status(500).send("Not authenticated"); return; }
        const { team_id, challenge_id } = req.body as { team_id: number; challenge_id: number };
        const query ='UPDATE `team_done_challenge` set `done` = `done` + 1 WHERE `team_id` = ? AND `challenge_id` = ?';
        await DB.execute(query, [team_id, challenge_id]);
        res.status(200).send("Done");
    } catch (_) {
        res.status(500).json({ error: "Error adding done" });
    }
}

export async function deleteChallengeDone(req: Request, res: Response) {
    try {
        const { password } = req.body as { password: string };
        if (password !== process.env.VPS_SITE_BACK_PASS) { res.status(500).send("Not authenticated"); return; }
        const { team_id, challenge_id } = req.body as { team_id: number; challenge_id: number };
        const query ='UPDATE `team_done_challenge` set `done` = `done` - 1 WHERE `team_id` = ? AND `challenge_id` = ?';
        await DB.execute(query, [team_id, challenge_id]);
        res.status(200).send("Done");
    } catch (_) {
        res.status(500).json({ error: "Error removing done" });
    }
}
