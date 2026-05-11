import express from "express";
import {
  createBooking,
  getUserBookings,
  getProviderBookings,
  updateBookingStatus,
} from "../controllers/bookingController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// User books service
router.post("/", protect, authorize("user"), createBooking);

// User bookings
router.get("/user", protect, authorize("user"), getUserBookings);

// Provider bookings
router.get("/provider", protect, authorize("provider"), getProviderBookings);

// Provider updates status
router.put("/:id", protect, authorize("provider"), updateBookingStatus);

export default router;