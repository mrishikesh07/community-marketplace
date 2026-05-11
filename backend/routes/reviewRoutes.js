import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// User adds review
router.post("/", protect, authorize("user"), createReview);

// Get reviews
router.get("/:serviceId", getReviews);

export default router;