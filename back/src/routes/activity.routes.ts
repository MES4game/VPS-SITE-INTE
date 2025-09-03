import { Router } from "express";
import { deleteActivityRecord, getActivities, getActivity, getActivityRecords, getActivityScores, postActivityRecord } from "@/controllers/activity.controller";

const router = Router();

/**
 * @openapi
 * /activity/getAll:
 *   get:
 *     summary: Returns activities list
 *     tags:
 *       - Activity module
 *     responses:
 *       200:
 *         description: A JSON containing id and name of every activities
 */
router.get("/getAll", getActivities);

/**
 * @openapi
 * /activity/getById/:id:
 *   get:
 *     summary: Returns activity of given ID
 *     tags:
 *       - Activity module
 *     responses:
 *       200:
 *         description: A JSON containing activity
 */
router.get("/getById/:id", getActivity);

/**
 * @openapi
 * /activity/scores/getByActivity/:id:
 *   get:
 *     summary: Returns scores of each team for activity part
 *     tags:
 *       - Activity module
 *     responses:
 *       200:
 *         description: A JSON containing every scores
 */
router.get("/scores/getByActivity/:id", getActivityScores);

/**
 * @openapi
 * /activity/record/getByActivity/:id:
 *   get:
 *     summary:
 *     tags:
 *       - Activity module
 *     responses:
 *       200:
 *         description: A JSON
 */
router.get("/record/getByActivity/:id", getActivityRecords);

/**
 * @openapi
 * /activity/record:
 *   post:
 *     summary: Add a record
 *     tags:
 *       - Challenge module
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - activity_id
 *               - team_id
 *               - team_num
 *               - room_id
 *               - slot_id
 *               - points
 *               - bonus
 *               - comment
 *             properties:
 *               password:
 *                 type: string
 *                 example: yoursecret
 *               activity_id:
 *                 type: integer
 *               team_id:
 *                 type: integer
 *               team_num:
 *                 type: integer
 *               room_id:
 *                 type: integer
 *               slot_id:
 *                 type: integer
 *               points:
 *                 type: integer
 *               bonus:
 *                 type: integer
 *               comment:
 *                 type: string
 *                 example: why that bonus
 *     responses:
 *       200:
 *         description: Done
 */
router.post("/record", postActivityRecord);

/**
 * @openapi
 * /activity/record:
 *   delete:
 *     summary: Delete a record
 *     tags:
 *       - Challenge module
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - activity_id
 *               - team_id
 *               - team_num
 *               - room_id
 *               - slot_id
 *             properties:
 *               password:
 *                 type: string
 *                 example: yoursecret
 *               activity_id:
 *                 type: integer
 *               team_id:
 *                 type: integer
 *               team_num:
 *                 type: integer
 *               room_id:
 *                 type: integer
 *               slot_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Done
 */
router.delete("/record", deleteActivityRecord);

export default router;
