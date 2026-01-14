import { Router } from "express";
import { auth, requireRole } from "../middlewares/auth.middlewares.js";
import {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
  cancelMyBooking,
} from "../controllers/booking.controller.js";

const router = Router();

// all booking routes require auth
router.use(auth);

// student / faculty / admin → can create and view own bookings
router.post(
  "/",
  requireRole("student", "faculty", "admin"),
  createBooking
);

router.get("/my", getMyBookings);

router.patch("/:id/cancel", cancelMyBooking);

// admin-only routes
router.get(
  "/",
  requireRole("admin"),
  getAllBookings
);

router.patch(
  "/:id/status",
  requireRole("admin"),
  updateBookingStatus
);

export const bookings =  router;