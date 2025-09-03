import { Router } from "express";
import { deleteChallengeDone, getChallenges, getChallengeScores, postChallengeDone } from "@/controllers/challenge.controller";

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

/**
 * @openapi
 * /challenge/done:
 *   post:
 *     summary: Add 1 to done for given team to given challenge
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
 *               - team_id
 *               - challenge_id
 *             properties:
 *               password:
 *                 type: string
 *                 example: yoursecret
 *               team_id:
 *                 type: integer
 *                 example: 1
 *               challenge_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Done
 */
router.post("/done", postChallengeDone);

/**
 * @openapi
 * /challenge/done:
 *   delete:
 *     summary: Substract 1 to done for given team to given challenge
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
 *               - team_id
 *               - challenge_id
 *             properties:
 *               password:
 *                 type: string
 *                 example: yoursecret
 *               team_id:
 *                 type: integer
 *                 example: 1
 *               challenge_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Done
 */
router.delete("/done", deleteChallengeDone);


export default router;
