import ColorButton from "@/components/colorButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next/types";

export const runtime = "edge";
export const metadata: Metadata = {
  title: "Refsheet",
};

export default function Refsheet() {
  return (
    <>
      <Image
        src="/ref/refsheet.jpg"
        alt="Refsheet"
        title="Refsheet"
        width={1262}
        height={1147}
        priority
        className="mx-auto mb-2 rounded-md object-cover"
      />
      <div className="flex justify-between mt-4">
        <div>
          <ColorButton copyColor="#ffffff" textColor="#000" />
          <ColorButton copyColor="#eaeaea" textColor="#000" />
          <ColorButton copyColor="#28282a" />
          <ColorButton copyColor="#a55808" />
          <ColorButton copyColor="#e4a929" />
        </div>
        <a href="/ref/refsheet.jpg" download>
          <Button className="justify-end" title="full resolution">
            Download
          </Button>
        </a>
      </div>
    </>
  );
}
