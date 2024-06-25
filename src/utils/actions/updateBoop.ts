"use server";

import { databases } from "@/app/appwrite-server";

export default async function updateBoop() {
  const data = await databases.getDocument("web", "boops", "default");
  return await databases.updateDocument("web", "boops", "default", {
    count: data.count + 1,
  });
}
