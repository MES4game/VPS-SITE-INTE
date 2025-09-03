import { Request, Response } from 'express';
import { DB } from '@/config/db';
import { ACTIVITY_SCHEMA, ENTRY_SCHEMA } from '@/models/activity.models';
import { SCORE_SCHEMA } from '@/models/common.models';
import { rawObjToSchema } from '@/utils/transfom';
import { RowDataPacket } from 'mysql2';

export async function getActivities(_: Request, res: Response) {
    try {
        const query = 'SELECT * FROM `activity`';
        const [result] = await DB.execute<RowDataPacket[]>(query);
        const activities = result.map((value) => rawObjToSchema(value, ACTIVITY_SCHEMA));
        res.status(200).json(activities);
    } catch (_) {
        res.status(500).json({ error: "Error fetching activities" });
    }
}

export async function getActivity(req: Request, res: Response) {
    try {
        const query = 'SELECT * FROM `activity` WHERE id = ?';
        const [result] = await DB.execute<RowDataPacket[]>(query, [req.params.id]);

        if (result.length === 0) { res.status(404).send(""); return; }

        const activity = rawObjToSchema(result[0], ACTIVITY_SCHEMA);
        res.status(200).json(activity);
    } catch (_) {
        res.status(500).json({ error: "Error fetching activity by id" });
    }
}

export async function getActivityScores(req: Request, res: Response) {
    try {
        const query ='SELECT `team_id`, SUM(`points` + `bonus`) AS `points` FROM `entry` WHERE `activity_id` = ? GROUP BY `team_id`';
        const [result] = await DB.execute<RowDataPacket[]>(query, [req.params.id]);
        const scores = result.map((value) => rawObjToSchema(value, SCORE_SCHEMA));
        res.status(200).json(scores);
    } catch (_) {
        res.status(500).json({ error: "Error fetching activity scores" });
    }
}

export async function getActivityRecords(req: Request, res: Response) {
    try {
        const query ='SELECT * FROM `entry` WHERE `activity_id` = ?';
        const [result] = await DB.execute<RowDataPacket[]>(query, [req.params.id]);
        const scores = result.map((value) => rawObjToSchema(value, ENTRY_SCHEMA));
        res.status(200).json(scores);
    } catch (_) {
        res.status(500).json({ error: "Error fetching activity scores" });
    }
}

export async function postActivityRecord(req: Request, res: Response) {
    try {
        const { password } = req.body as { password: string };
        if (password !== process.env.VPS_SITE_BACK_PASS) { res.status(500).send("Not authenticated"); return; }
        const { activity_id, team_id, team_num, room_id, slot_id, points, bonus, comment } = req.body as { activity_id: number, team_id: number, team_num: number, room_id: number, slot_id: number, points: number, bonus: number, comment: string };
        console.log({ activity_id, team_id, team_num, room_id, slot_id, points, bonus, comment });
        const query ='INSERT INTO `entry` (`activity_id`, `team_id`, `team_num`, `room_id`, `slot_id`, `points`, `bonus`, `comment`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        console.log(await DB.execute(query, [activity_id, team_id, team_num, room_id, slot_id, points, bonus, comment]));
        res.status(200).send("Done");
    } catch (_) {
        res.status(500).json({ error: "Error adding a record" });
    }
}

export async function deleteActivityRecord(req: Request, res: Response) {
    try {
        const { password } = req.body as { password: string };
        if (password !== process.env.VPS_SITE_BACK_PASS) { res.status(500).send("Not authenticated"); return; }
        const { activity_id, team_id, team_num, room_id, slot_id } = req.body as { activity_id: number, team_id: number, team_num: number, room_id: number, slot_id: number };
        const query ='DELETE FROM `entry` WHERE `activity_id` = ? AND `team_id` = ? AND `team_num` = ? AND `room_id` = ? AND `slot_id` = ?';
        console.log(await DB.execute(query, [activity_id, team_id, team_num, room_id, slot_id]));
        res.status(200).send("Done");
    } catch (_) {
        res.status(500).json({ error: "Error removing a record" });
    }
}
