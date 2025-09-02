import { Router } from "express";
import { getResultScores } from "@/controllers/result.controller";

const router = Router();

/**
 * @openapi
 * /result/scores/getAll:
 *   get:
 *     summary: Returns results for each team
 *     tags:
 *       - Result module
 *     responses:
 *       200:
 *         description: A JSON containing results
 */
router.get("/scores/getAll", getResultScores);

export default router;
