import express from "express";
import { store, update, destroy } from "../controllers/carController.js";

const router = express.Router();

router.post("/", store);
router.patch("/:id", update);
router.delete("/:id", destroy);

export default router;
