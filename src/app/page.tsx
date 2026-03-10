import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <TechStack />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
