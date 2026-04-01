import { Router } from "express";
import { createTopic } from "./topic-controller.js";

const router = Router()
router.post("/", createTopic)

export default router