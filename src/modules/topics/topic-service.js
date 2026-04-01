import prisma from "../../db/client.js"

export const createTopicLogic = async (data) => {
    return await prisma.topic.create({
        data
    })
}