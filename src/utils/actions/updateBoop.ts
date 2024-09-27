"use server";

import { databases } from "@/app/appwrite-server";

export default async function updateBoop() {
  const data = await databases.getDocument("web", "counters", "kesuBoops");
  return await databases.updateDocument("web", "counters", "kesuBoops", {
    count: data.count + 1,
  });
}
