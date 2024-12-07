import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm/ContactForm";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <ContactForm />
    </main>
  );
}

