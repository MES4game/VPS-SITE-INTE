import { Router } from "express";
import { getTeams } from "@/controllers/team.controller";

const router = Router();

/**
 * @openapi
 * /team:
 *   get:
 *     summary: Returns every teams
 *     tags:
 *       - Team module
 *     responses:
 *       200:
 *         description: A JSON containing teams
 */
router.get("/", getTeams);

export default router;
