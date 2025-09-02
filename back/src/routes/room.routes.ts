import { Router } from "express";
import { getRooms } from "@/controllers/room.controller";

const router = Router();

/**
 * @openapi
 * /room:
 *   get:
 *     summary: Returns every rooms
 *     tags:
 *       - Room module
 *     responses:
 *       200:
 *         description: A JSON containing rooms
 */
router.get("/", getRooms);

export default router;
