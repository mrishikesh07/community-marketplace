import express from "express";
import {
  createService,
  getServices,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Provider only
router.post("/", protect, authorize("provider"), createService);

// Public
router.get("/", getServices);

// Provider only
router.put("/:id", protect, authorize("provider"), updateService);
router.delete("/:id", protect, authorize("provider"), deleteService);

export default router;