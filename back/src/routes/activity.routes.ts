import { Router } from "express";
import { getActivities, getActivity, getActivityScores } from "@/controllers/activity.controller";

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
 * /activity/scores/getAll:
 *   get:
 *     summary: Returns scores of each team for activity part
 *     tags:
 *       - Activity module
 *     responses:
 *       200:
 *         description: A JSON containing every scores
 */
router.get("/scores/getAll", getActivityScores);

export default router;
