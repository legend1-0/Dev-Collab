import { createNoteLogic, getNoteByIdLogic, getNoteByTopicLogic, getNoteByTopicsLogic, getNoteLogic, linkTopictoNoteLogic, patchNoteLogic } from "./note-service.js";

export const getNote = async (req , res) => {
    const notes = await getNoteLogic()
    res.json(notes)
}
export const getNoteById = async (req , res) => {
    const {noteid} = req.params
    const notes = await getNoteByIdLogic(Number(noteid))
    res.json(notes)
}

export const getNoteByTopic = async (req , res) => {
    const {topicname} = req.params
    const notes = await getNoteByTopicLogic(topicname)
    res.json(notes)
}
export const createNote = async (req , res) => {
    const notes = await createNoteLogic(req.body)
    res.status(201).json(notes)
}
export const patchNote = async (req , res) => {
    const {noteid} = req.params
    const notes = await patchNoteLogic(Number(noteid), req.body)
        res.status(201).json(notes)
}
export const getNoteByTopics = async (req , res) => {
    const {topics} = req.query
    let topicArray = []
    topicArray = topics.split(",")
    const notes = await getNoteByTopicsLogic(topicArray)
    res.json(notes)   
}
export const linkTopictoNote = async (req , res) => {
    const {noteid} = req.params
    const {topicid} = req.body
    const notes = await linkTopictoNoteLogic(Number(noteid), Number(topicid))
    res.json(notes)
}