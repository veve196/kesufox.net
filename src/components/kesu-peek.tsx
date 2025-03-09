"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/kesuPeek.css";

export default function KesuPeek() {
  const [isPeeking, setIsPeeking] = useState(false);

  const handleClick = async () => {
    if (isPeeking) return;

    setIsPeeking(true);

    const speechBubble: HTMLElement = document.getElementById(
      "speechBubble"
    ) as HTMLElement;
    speechBubble.style.visibility = "visible";

    setTimeout(() => {
      speechBubble.style.visibility = "hidden";
      setIsPeeking(false);
    }, 1000);
  };

  return (
    <>
      <div id="kesuPeek">
        <Image
          src="/kesuPeek.webp"
          alt="Kesu Peek"
          width={200}
          height={200}
          draggable="false"
          onClick={handleClick}
        />
        <span id="speechBubble" className="speech-bubble">
          Greetings!
        </span>
      </div>
    </>
  );
}
