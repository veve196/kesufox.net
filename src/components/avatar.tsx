"use client";

import updateBoop from "../utils/actions/updateBoop";
import { useEffect } from "react";
import "@/styles/avatar.css";

export default function Avatar() {
  const handleClick = async (e: React.MouseEvent<HTMLImageElement>) => {
    const text = document.createElement("span");

    const messages = ["*boop*"];

    text.textContent = messages[Math.floor(Math.random() * messages.length)];
    text.className = "fade-away";
    text.style.left = `${e.pageX}px`;
    text.style.top = `${e.pageY - 40}px`; // Bisschen höher setzen weil der Daumen sonst verdeckt
    document.body.appendChild(text);

    setTimeout(() => {
      document.body.removeChild(text);
    }, 2000);

    await updateBoop();
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/kesufox_blush.webp";
  }, []);

  return (
    <div
      id="avatar"
      className="w-[250px] h-[250px] rounded-full mx-auto select-none p-1 border border-background cursor-pointer"
    >
      {/* <Image
        width={250}
        height={250}
        src="/kesufox.webp"
        alt="kesufox avatar"
        title="Boop me!"
        priority
        draggable={false}
        className="rounded-full mx-auto select-none p-1 border border-background cursor-pointer"
        onClick={handleClick}
      /> */}
    </div>
  );
}
