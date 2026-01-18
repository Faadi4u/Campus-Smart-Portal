import { Router } from "express";
import {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
  cancelMyBooking,
  getDashboardStats,
  getMyBookingStats,
  searchBookings,
  getCalendarBookings,
  checkAvailability,
} from "../controllers/booking.controller.js";
import { auth, requireRole } from "../middlewares/auth.middlewares.js";

const router = Router();

router.use(auth);

// User routes
router.post("/", createBooking);
router.get("/my-bookings", getMyBookings);
router.get("/my-stats", getMyBookingStats);
router.patch("/:id/cancel", cancelMyBooking);

// Calendar & Availability
router.get("/calendar", getCalendarBookings);
router.get("/availability", checkAvailability);

// Admin routes
router.get("/all", requireRole("admin"), getAllBookings);
router.get("/search", requireRole("admin"), searchBookings);
router.get("/dashboard", requireRole("admin"), getDashboardStats);
router.patch("/:id/status", requireRole("admin"), updateBookingStatus);
export const bookings =  router;