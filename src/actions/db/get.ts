import db from ".";
import { getUserId } from "@/app/utils/auth";
export const contentPacks = () => {
  const data = db.contentPack.findMany();
  return data;
};

export const userContentPacks = async () => {
  const id = await getUserId();
  if (!id) {
    throw new Error("User not found");
  }

  const data = db.contentPack.findMany({
    where: {
      userId: id,
    },
  });
  return data;
};
