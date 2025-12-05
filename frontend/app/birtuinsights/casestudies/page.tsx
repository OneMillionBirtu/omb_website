import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Hero - Areas of Work */}
      <header
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 80, 46, 0.90) 35.58%, rgba(0, 0, 0, 0.72) 100%), url('/wateringMan.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="container mx-auto px-16 py-20">
          <div className="flex flex-col gap-4 w-full text-white">
            {/* Left copy */}
            <div className="flex justify-end w-full">
              <p className="text-6xl">Birtu Insights</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mt-16">
                <div className="w-12 h-0.5 bg-amber-400" />
                <div className="uppercase text-4xl text-amber-400 tracking-widest font-semibold">
                  Case Studies
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Programs section - alternating layout */}
      <section className="bg-white">
        <div className="flex flex-wrap container mx-auto px-16 py-16 gap-6">
          <Card className="p-6 w-xs shadow-lg">
            <Image
              src="/solar.jpg"
              alt="Mrs. Kechine"
              width={72}
              height={72}
              className="object-cover rounded-xl w-full"
              priority
            />
            <div className="flex">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-2" />
              <div className="text-xs text-gray-500 mb-2">March 2025</div>
            </div>
            <p className="text-sm -mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 bg-amber-400 text-black rounded">Read more</button>
          </Card>
          <Card className="p-6 w-xs shadow-lg">
            <Image
              src="/solar.jpg"
              alt="Mrs. Kechine"
              width={72}
              height={72}
              className="object-cover rounded-xl w-full"
              priority
            />
            <div className="flex">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-2" />
              <div className="text-xs text-gray-500 mb-2">March 2025</div>
            </div>
            <p className="text-sm -mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 bg-amber-400 text-black rounded">Read more</button>
          </Card>
          <Card className="p-6 w-xs shadow-lg">
            <Image
              src="/solar.jpg"
              alt="Mrs. Kechine"
              width={72}
              height={72}
              className="object-cover rounded-xl w-full"
              priority
            />
            <div className="flex">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-2" />
              <div className="text-xs text-gray-500 mb-2">March 2025</div>
            </div>
            <p className="text-sm -mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 bg-amber-400 text-black rounded">Read more</button>
          </Card>
        </div>
      </section>

      {/* Electrify banner */}
      <section className="container mx-auto px-16 py-12">
        <div
          className="rounded-xl overflow-hidden relative h-56 md:h-72"
          style={{
            background:
              "linear-gradient( rgba(0,0,0,0.25), rgba(0,0,0,0.25) ), url('/livelihood.png') center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-8">
                You can contribute to Electrify Ethiopia by 2030
              </h2>
              <button className="px-6 py-2 bg-amber-400 text-black rounded">Donate →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
