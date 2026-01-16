import { Router } from "express";
import { createRoom, getRooms , searchRooms } from "../controllers/rooms.controller.js";
import { auth, requireRole } from "../middlewares/auth.middlewares.js"; // adjust path/name if needed

const router = Router();

// all room routes require login
router.use(auth);

// list rooms – any authenticated user
router.get("/", getRooms);

// create room – admin only
router.post("/", requireRole("admin"), createRoom);

// Seacrh room 
router.get("/search", searchRooms);

export default router;