"use client";

import { client } from "@/app/appwrite";
import { CounterDocument } from "@/utils/models";
import { RealtimeResponseEvent } from "appwrite";
import { useEffect, useState } from "react";

interface Props {
  count: number;
}

export default function BoopCounter({ count }: Props) {
  const [boopCounter, setBoopCounter] = useState(count);
  useEffect(() => {
    client.subscribe(
      "databases.web.collections.counters.documents.kesuBoops",
      (response: RealtimeResponseEvent<CounterDocument>) => {
        setBoopCounter(response.payload.count);
      }
    );
  }, []);
  return <p>Boops: {boopCounter}</p>;
}
