import express from "express";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// User route (any logged-in user)
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile accessed",
    user: req.user,
  });
});

// Admin only route
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Admin route accessed",
  });
});

export default router;