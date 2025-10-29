import { addTrackingInformationToNotion } from "@/components/ContactForm/actions";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { use } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const parameters = use(searchParams);
  const { reference } = parameters;

  if (reference && typeof reference === "string") {
    addTrackingInformationToNotion({
      slug: reference,
      path: "/",
    })
      .then(() => {
        console.log(
          `Tracking information for ${reference} added successfully.`
        );
      })
      .catch(console.error);
  }

  return (
    <main className="relative min-h-screen flex flex-col gap-48 pt-32">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
