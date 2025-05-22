import Avatar from "@/components/avatar";
import BoopCounter from "@/components/boop-counter";
import { Button } from "@/components/ui/button";
import {
  SiBluesky,
  SiSteam,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="relative pb-2 max-w-2xl mx-auto text-foreground">
      <div className="absolute inset-0 bg-background opacity-50 z-[-1] rounded-3xl"></div>
      <div className="text-white text-center border-b border-muted/50 mb-4 px-2 bg-black/30 rounded-t-3xl">
        <Button
          variant="link"
          className="px-2 text-white/60"
          type="button"
          asChild
        >
          <Link href={"/about"}>About</Link>
        </Button>
        •
        <Button
          variant="link"
          className="px-2 text-white/60"
          type="button"
          asChild
        >
          <Link href={"/ref"}>Refsheet</Link>
        </Button>
      </div>
      <div className="px-24 text-center">
        <Avatar />
        <p className="text-4xl mt-2 mb-4">kesufox</p>
        <Button className="bg-foreground block mx-auto w-full mb-2 rounded">
          <Link href={"https://t.me/kesufox"} target="_blank">
            <SiTelegram className="inline me-1" /> Telegram
          </Link>
        </Button>
        <Button className="bg-foreground block mx-auto w-full mb-2 rounded">
          <Link href={"https://twitter.com/kesufox"} target="_blank">
            <SiX className="inline me-1" /> Twitter/X
          </Link>
        </Button>
        <Button className="bg-foreground block mx-auto w-full mb-2 rounded">
          <Link
            href={"https://bsky.app/profile/kesufox.bsky.social"}
            target="_blank"
          >
            <SiBluesky className="inline me-1" /> Bluesky
          </Link>
        </Button>
        <Button className="bg-foreground block mx-auto w-full mb-8 rounded">
          <Link href={"https://steamcommunity.com/id/kesufox"} target="_blank">
            <SiSteam className="inline me-1" /> Steam
          </Link>
        </Button>
        <BoopCounter />
      </div>
    </div>
  );
}
