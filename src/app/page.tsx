import Avatar from "@/components/avatar";
import BoopCounter from "@/components/boopCounter";
import { Button } from "@/components/ui/button";
import getBoops from "@/utils/server-api/getBoops";
import { SiSteam, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default async function Home() {
  const boops = await getBoops();

  return (
    <div className="relative pt-8 pb-2 text-center text-foreground px-24">
      <div className="absolute inset-0 bg-background opacity-50 z-[-1] rounded-3xl"></div>
      <Avatar />
      <p className="text-4xl mt-2 mb-8">kesufox</p>
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
      <Button className="bg-foreground block mx-auto w-full mb-8 rounded">
        <Link href={"https://steamcommunity.com/id/kesufox"} target="_blank">
          <SiSteam className="inline me-1" /> Steam
        </Link>
      </Button>
      <BoopCounter count={boops.count} />
    </div>
  );
}
