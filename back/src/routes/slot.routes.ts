import { Router } from "express";
import { getSlots } from "@/controllers/slot.controller";

const router = Router();

/**
 * @openapi
 * /slot/getAll:
 *   get:
 *     summary: Returns every slots
 *     tags:
 *       - Slot module
 *     responses:
 *       200:
 *         description: A JSON containing slots
 */
router.get("/getAll", getSlots);

export default router;
