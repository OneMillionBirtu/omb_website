import heroImage from "hero-image.jpg";
import Image from "next/image";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Ethiopian farmers using climate-smart technology"
            className="w-full h-full object-cover opacity-30"
            width={500}
            height={300}
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Livelihoods Through
              <span className="block text-accent">Climate-Smart Innovation</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Building sustainable markets and resilient communities across Ethiopia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant={"outline"} className="text-lg px-8">
                {/* <Link to="/"> */}
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
                {/* </Link> */}
              </Button>
              <Button size="lg" variant={"outline"} className="text-lg px-8">
                {/* <Link to="/get-involved">Support Us</Link> */}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
