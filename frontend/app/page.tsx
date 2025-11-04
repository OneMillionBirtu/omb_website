// import heroImage from "hero-image.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-hero h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-image.jpg"
            alt="Ethiopian farmers using climate-smart technology"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>

        <div className="relative container mx-auto px-4 flex h-full items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-primary-foreground animate-fade-in">
            <h1 className="text-4xl lg:text-4xl font-bold mb-6 leading-tight">
              Empowering Livelihoods Through Climate-Smart Technologies
            </h1>
            <h2 className="hidden sm:block text-lg sm:text-xl md:text-3xl mb-6 text-primary-foreground/90 leading-relaxed">
              Building sustainable markets and resilient communities across Ethiopia
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 bg-amber-400 text-green-900">
                Our Work
              </Button>
              <Button size="lg" className="text-lg px-8 bg-amber-400 text-green-900">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
