import prisma from "../../db/client.js";

export const createNoteLogic = async (data) => {
  return await prisma.note.create({
    data,
  });
};

export const getNoteLogic = async () => {
  return await prisma.note.findMany({
    include: {
      topics: true,
    },
  });
};

export const getNoteByIdLogic = async (id) => {
    return await prisma.note.findMany({
        where: {id},
        include: {
            topics: true,
        }
    })
}
export const patchNoteLogic = async (id, data) => {
  return await prisma.note.update({
    where: { id },
    data,
    include: {
      topics: true,
    },
  });
};
export const getNoteByTopicLogic = async (topicName) => {
    return await prisma.note.findMany({
        where: {
            topics:{
                some:{
                    name: topicName
                }
            }
        }, include: {
            topics: true
        }
    })
}
export const getNoteByTopicsLogic = async (topicNameArray) => {
    return await prisma.note.findMany({
        where: {
            AND: topicNameArray.map((name)=>({
                topics: {
                    some:{
                        name: name
                    }
                }
            }))
        }, include: {
            topics: true
        }
    })
}
export const linkTopictoNoteLogic = async (noteid, topicid) => {
  return await prisma.note.update({
    where: { id: noteid },
    data: {
      topics: {
        connect: { id: topicid },
      },
    },
    include: {
      topics: true,
    },
  });
};

