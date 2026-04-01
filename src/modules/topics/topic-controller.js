import { createTopicLogic } from "./topic-service.js";

export const createTopic = async (req, res) => {
    
    const topic = await createTopicLogic(req.body)
    res.json(topic)
}