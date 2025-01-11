import ColorButton from "@/components/colorButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next/types";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Refsheet",
  description: "Made by Oggy123!",
  openGraph: {
    title: "Refsheet",
    description: "Made by Oggy123!",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/ref/refsheet.webp`,
        width: 1100,
        height: 812,
        alt: "Refsheet",
      },
    ],
  },
};

export default function Refsheet() {
  return (
    <>
      <Image
        src="/ref/refsheet.webp"
        alt="Refsheet"
        title="Refsheet"
        width={1100}
        height={812}
        priority
        className="mx-auto mb-2 rounded-md object-cover"
      />
      <div className="flex justify-between mt-4">
        <div>
          <ColorButton copyColor="#ffffff" textColor="#000" />
          <ColorButton copyColor="#eaeaea" textColor="#000" />
          <ColorButton copyColor="#28282a" />
          <ColorButton copyColor="#a55808" />
          <ColorButton copyColor="#431400" />
          <ColorButton copyColor="#e4a929" />
          <ColorButton copyColor="#5e2224" />
          <ColorButton copyColor="#f08e86" />
          <ColorButton copyColor="#ffc4bf" />
        </div>
        <a href="/ref/refsheet.png" download>
          <Button className="justify-end" title="full resolution">
            Download full res
          </Button>
        </a>
      </div>
    </>
  );
}
