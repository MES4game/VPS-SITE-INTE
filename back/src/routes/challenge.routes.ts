import { Router } from "express";
import { getChallenges, getChallengeScores } from "@/controllers/challenge.controller";

const router = Router();

/**
 * @openapi
 * /challenge/getAll:
 *   get:
 *     summary: Returns scores for each challenge and team (with challenges data also)
 *     tags:
 *       - Challenge module
 *     responses:
 *       200:
 *         description: A JSON containing every challenges with the score of each team
 */
router.get("/getAll", getChallenges);

/**
 * @openapi
 * /challenge/scores/getAll:
 *   get:
 *     summary: Returns scores of each team for challenge part
 *     tags:
 *       - Challenge module
 *     responses:
 *       200:
 *         description: A JSON containing every scores
 */
router.get("/scores/getAll", getChallengeScores);

export default router;
