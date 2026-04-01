import { Router } from "express";
import { createNote, getNote, getNoteById, getNoteByTopic, getNoteByTopics, linkTopictoNote, patchNote } from "./note-controller.js";
const router = Router()

router.get("/", getNote)
router.get("/:noteid", getNoteById)
router.get("/bytopic/:topicname", getNoteByTopic)
router.get("/bytopics/topic", getNoteByTopics)
router.post("/", createNote)
router.patch("/:noteid", patchNote)
router.post("/:noteid/topic", linkTopictoNote)

export default router