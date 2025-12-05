import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Calendar, Download } from "lucide-react";

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
              <p className="text-6xl">Birtu Resources</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mt-16">
                <div className="w-12 h-0.5 bg-amber-400" />
                <div className="uppercase text-4xl text-amber-400 tracking-widest font-semibold">
                  Publications
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Programs section - alternating layout */}
      <section className="bg-white">
        <div className="flex flex-wrap container mx-auto px-16 py-16 gap-6">
          <Card className="p-6 w-xs h-fit shadow-lg border-l-4 border-l-green-900  ">
            <p className="font-bold">Climate-smart Agriculture Impact Assesment</p>
            <div className="flex items-center -mt-4">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <div className="text-xs text-gray-500 mr-1">March 2025 </div>
              <p className="text-gray-500">• </p>
              <p className="text-gray-500 text-xs ml-1"> Agriculture</p>
            </div>

            <p className="text-sm -mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 w-1/2 bg-amber-400 text-black rounded flex items-center justify-center gap-2">
              <Download />
              Download
            </button>
          </Card>
          <Card className="p-6 w-xs h-fit shadow-lg border-l-4 border-l-green-900  ">
            <p className="font-bold">Climate-smart Agriculture Impact Assesment</p>
            <div className="flex items-center -mt-4">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <div className="text-xs text-gray-500 mr-1">March 2025 </div>
              <p className="text-gray-500">• </p>
              <p className="text-gray-500 text-xs ml-1"> Agriculture</p>
            </div>

            <p className="text-sm -mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 w-1/2 bg-amber-400 text-black rounded flex items-center justify-center gap-2">
              <Download />
              Download
            </button>
          </Card>
          <Card className="p-6 w-xs h-fit shadow-lg border-l-4 border-l-green-900  ">
            <p className="font-bold">Climate-smart Agriculture Impact Assesment</p>
            <div className="flex items-center -mt-4">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <div className="text-xs text-gray-500 mr-1">March 2025 </div>
              <p className="text-gray-500">• </p>
              <p className="text-gray-500 text-xs ml-1"> Agriculture</p>
            </div>

            <p className="text-sm -mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 w-1/2 bg-amber-400 text-black rounded flex items-center justify-center gap-2">
              <Download />
              Download
            </button>
          </Card>
          <Card className="p-6 w-xs h-fit shadow-lg border-l-4 border-l-green-900  ">
            <p className="font-bold">Climate-smart Agriculture Impact Assesment</p>
            <div className="flex items-center -mt-4">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <div className="text-xs text-gray-500 mr-1">March 2025 </div>
              <p className="text-gray-500">• </p>
              <p className="text-gray-500 text-xs ml-1"> Agriculture</p>
            </div>

            <p className="text-sm -mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 w-1/2 bg-amber-400 text-black rounded flex items-center justify-center gap-2">
              <Download />
              Download
            </button>
          </Card>
          <Card className="p-6 w-xs h-fit shadow-lg border-l-4 border-l-green-900  ">
            <p className="font-bold">Climate-smart Agriculture Impact Assesment</p>
            <div className="flex items-center -mt-4">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <div className="text-xs text-gray-500 mr-1">March 2025 </div>
              <p className="text-gray-500">• </p>
              <p className="text-gray-500 text-xs ml-1"> Agriculture</p>
            </div>

            <p className="text-sm -mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 w-1/2 bg-amber-400 text-black rounded flex items-center justify-center gap-2">
              <Download />
              Download
            </button>
          </Card>
          <Card className="p-6 w-xs h-fit shadow-lg border-l-4 border-l-green-900  ">
            <p className="font-bold">Climate-smart Agriculture Impact Assesment</p>
            <div className="flex items-center -mt-4">
              <Calendar className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <div className="text-xs text-gray-500 mr-1">March 2025 </div>
              <p className="text-gray-500">• </p>
              <p className="text-gray-500 text-xs ml-1"> Agriculture</p>
            </div>

            <p className="text-sm -mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa debitis, rerum
              quaerat accusamus architecto minus corrupti repellendus doloremque vel iusto totam,
              distinctio sunt dicta labore enim iste ex corporis.
            </p>
            <button className="px-4 py-2 w-1/2 bg-amber-400 text-black rounded flex items-center justify-center gap-2">
              <Download />
              Download
            </button>
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
