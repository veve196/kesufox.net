import getContent from "@/servert-api/getContent";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About",
  description: "Some stuff about me!",
  openGraph: {
    title: "About",
    description: "some stuff about me!",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/ref/refsheet.webp`,
        width: 1100,
        height: 812,
        alt: "Kesufox",
      },
    ],
  },
};

export default async function AboutPage() {
  const aboutContent = await getContent("about");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </>
  );
}
