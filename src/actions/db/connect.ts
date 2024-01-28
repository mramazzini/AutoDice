import db from ".";

export const addContentPackToUser = async (
  userId: number,
  contentPackId: number
) => {
  const data = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      contentPacks: {
        connect: {
          id: contentPackId,
        },
      },
    },
  });
  return data;
};

export const addDefaultContentPacksToUser = async (userId: number) => {
  //find content packs with default true
  const data = await db.contentPack.findMany({
    where: {
      default: true,
    },
  });
  for (const contentPack of data) {
    await addContentPackToUser(userId, contentPack.id);
  }
  return data;
};
