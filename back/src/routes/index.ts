import express from "express";
import healthRoutes from "@/routes/health.routes";
import teamRoutes from "@/routes/team.routes";
import roomRoutes from "@/routes/room.routes";
import slotRoutes from "@/routes/slot.routes";
import activityRoutes from "@/routes/activity.routes";
import challengeRoutes from "@/routes/challenge.routes";
import resultRoutes from "@/routes/result.routes";

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/team", teamRoutes);
router.use("/room", roomRoutes);
router.use("/slot", slotRoutes);
router.use("/activity", activityRoutes);
router.use("/challenge", challengeRoutes);
router.use("/result", resultRoutes);

export default router;
