import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Button
        variant={"default"}
        asChild
        className="bg-foreground block mb-2 rounded w-24 text-center"
      > */}
      <Link href={"/"} className="text-black/60">
        Go back
      </Link>
      {/* </Button> */}
      <Separator className="bg-black/20 mb-4" />
      {children}
    </>
  );
}
