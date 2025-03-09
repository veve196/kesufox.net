import { Models } from "node-appwrite";

export interface CounterDocument extends Models.Document {
  count: number;
  previousCount?: number;
}
