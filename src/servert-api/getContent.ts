"use server";

import { databases } from "@/app/appwrite-server";

export default async function getContent(key: string): Promise<string> {
  const result = await databases.getDocument("web", "content", key);
  return result.text;
}
