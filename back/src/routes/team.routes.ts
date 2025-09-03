import { Router } from "express";
import { getTeams } from "@/controllers/team.controller";

const router = Router();

/**
 * @openapi
 * /team/getAll:
 *   get:
 *     summary: Returns every teams
 *     tags:
 *       - Team module
 *     responses:
 *       200:
 *         description: A JSON containing teams
 */
router.get("/getAll", getTeams);

export default router;
