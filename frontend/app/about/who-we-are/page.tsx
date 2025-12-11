import Navbar from "@/components/Navbar";
import solar from "@/public/solar.jpg";
import Footer from "@/components/Footer";
import Image from "next/image";
import Students from "@/public/Education.png";
import DairyFarmer from "@/public/dairyFarmer.jpg";

const page = () => {
  const targets = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <circle cx="60" cy="60" r="55.5" fill="#00512E" stroke="#219D80" stroke-width="9"/> </svg>`,
      value: "4597+",
      title: "Improved women esteem",
      description: "contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <circle cx="60" cy="60" r="55.5" fill="#00512E" stroke="#219D80" stroke-width="9"/> </svg>`,
      value: "4597+",
      title: "Improved women esteem",
      description: "contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <circle cx="60" cy="60" r="55.5" fill="#00512E" stroke="#219D80" stroke-width="9"/> </svg>`,
      value: "4597+",
      title: "Improved women esteem",
      description: "contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"> <circle cx="60" cy="60" r="55.5" fill="#00512E" stroke="#219D80" stroke-width="9"/> </svg>`,
      value: "4597+",
      title: "Improved women esteem",
      description: "contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-4 py-12  md:px-12 md:py-16 lg:px-16 lg:py-24 inline-flex flex-col h-fit justify-center items-center gap-8 md:gap-8 lg:mb-48">
        <div className="flex justify-start items-center gap-3 md:gap-6 w-full h-fit">
          <div className="w-8 md:w-20 h-0 origin-top-left outline-2 -outline-offset-1 outline-gray-800"></div>
          <div className="origin-top-left  justify-start text-gray-800 text-xl md:text-2xl font-bold  uppercase tracking-widest">
            WHO WE ARE
          </div>
        </div>
        <div className="w-full lg:px-16 inline-flex justify-between items-center h-fit">
          <div className="w-full  inline-flex flex-col justify-start items-start gap-6 md:gap-10">
            <div className=" justify-start text-gray-800 text-4xl md:text-5xl font-bold  leading-[57.60px]">
              Our Founding
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-12 justify-center items-center text-justify ">
              <div className="order-2 lg:order-1 w-full md:w-[90%] justify-center text-zinc-600 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam libero
                vitae erat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam libero
                vitae erat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat.
              </div>
              <Image
                className="order-1 lg:order-2 md:w-[80%] h-auto rounded-[20px]"
                src={DairyFarmer}
                alt="Dairy Farmer"
              />
            </div>
          </div>
        </div>
        <div className=" h-fit w-full py-8 lg:px-16 lg:py-16 flex flex-col justify-start items-start gap-6">
          <div className="inline-flex flex-col lg:flex-row justify-start items-center gap-6 lg:gap-14">
            <div className="w-full lg:h-96 inline-flex flex-col justify-start items-start gap-10">
              <div className="w-full text-right justify-start text-gray-800 text-4xl md:text-5xl font-bold  leading-[57.60px]">
                Our Whys
              </div>
              <div className="flex flex-col lg:flex-row  gap-6 h-auto justify-center items-center text-justify ">
                <Image
                  className="h-auto w-full lg:w-auto lg:h-90 rounded-[20px]"
                  src={Students}
                  alt="Students learning"
                />
                <div className="w-full text-justify justify-start text-zinc-600 text-base font-normal h-fit leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam
                  libero vitae erat.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam
                  libero vitae erat.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                  in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                  libero vitae erat.Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                  vitae erat.
                </div>
              </div>
              <div className="w-full text-justify justify-start text-zinc-600 text-base font-normal h-fit leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam libero
                vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo
                diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.eros dolor
                interdum nulla, ut commodo diam libero vitae erat. interdum nulla, ut commodo diam
                libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission,Vision */}
      <section className="w-full flex flex-col items-center justify-center relative ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F7AD1A"
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div
          className="absolute w-80 md:w-[720px] md:h-80 lg:w-[1060px] h-44 lg:h-100 bg-black top-[-25]  d lg:top-0 rounded-3xl"
          style={{
            background: `url('/about-us.jpg') center / cover no-repeat`,
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "multiply",
          }}
        >
          <a
            title="about"
            href="https://www.youtube.com/channel/UCWapb2UQEpslmN_Ho2ANWJw"
            target="_blank"
            rel="noopener noreferrer"
            className="
            absolute inset-0 flex justify-center items-center
            cursor-pointer
          "
          >
            <div
              className="
              w-14 h-14 md:w-20 md:h-20
              bg-white/90 rounded-full flex items-center justify-center
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="w-full px-8 md:px-16 lg:px-28 pt-44 pb-32 bg-[#F7AD1A] inline-flex flex-col justify-start items-center gap-24">
          <div className="inline-flex  flex-col lg:flex-row justify-start items-center gap-16 md:gap-24">
            <div className="w-full flex gap-4 flex-col">
              <div className="justify-start text-gray-800 text-base font-bold  uppercase tracking-widest">
                Our Approaches
              </div>
              <div className="justify-start text-gray-800 text-3xl font-bold  leading-10">
                We make sure to provide inclusive care for children with special needs
              </div>
              <div className="opacity-80 justify-start text-gray-800 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2.5">
              <div className="flex-1 h-10 justify-start text-gray-800 text-3xl font-bold  leading-10">
                [An Info Graphics Here]
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col md:flex-row justify-start items-center gap-16 lg:gap-24">
            <div className="flex gap-4 flex-col ">
              <div className="justify-start text-gray-800 text-base font-bold  uppercase tracking-widest">
                our mission
              </div>
              <div className=" justify-start text-gray-800 text-3xl font-bold  leading-10">
                We make sure to provide inclusive care for children with special needs
              </div>
              <div className=" opacity-70 justify-start text-gray-800 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </div>
            </div>

            <div className="flex gap-4 flex-col">
              <div className="justify-start text-gray-800 text-base font-bold  uppercase tracking-widest">
                our Vision
              </div>
              <div className=" justify-start text-gray-800 text-3xl font-bold  leading-10">
                Provide more inclusive care to children around the world
              </div>
              <div className=" opacity-70 justify-start text-gray-800 text-base font-normal  leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  future target*/}
      <section
        style={{
          background: `linear-gradient(0deg, rgba(14, 34, 25, 0.90) 0%, rgba(14, 34, 25, 0.80) 100%), url(${solar.src}) lightgray 70% / cover no-repeat`,
        }}
        className="px-4 py-12 md:px-12 md:py-12 flex flex-col justify-center items-center gap-8 md:gap-16"
      >
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <div className="text-amber-400 text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Our Targets
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:flex-wrap  justify-center items-center gap-6">
          {targets.map((item, index) => (
            <div
              key={index}
              className="flex-1 px-4 md:px-8 md:min-w-80 lg:max-w-108 py-8 bg-emerald-900/50 rounded-3xl inline-flex  justify-start items-center gap-8"
            >
              {/* SVG Circle */}

              <div className="flex flex-row md:flex-col justify-start items-center gap-2 ">
                <div className="flex flex-col justify-center items-center  ">
                  <div
                    className="w-32 h-32 flex justify-center items-center"
                    dangerouslySetInnerHTML={{ __html: item.svg }}
                  ></div>
                  <div className="text-amber-400 text-center text-4xl font-bold capitalize leading-9">
                    {item.value}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-semibold leading-7">
                    {item.title}
                  </div>

                  <div className="w-full text-center text-green-200 text-base font-normal leading-5">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Electrify banner */}
      <section className="container mx-auto px-4 py-6 md:px-8 md:py-10 lg:px-16 lg:py-12">
        <div
          className="rounded-xl overflow-hidden relative h-56 lg:h-72"
          style={{
            background:
              "linear-gradient( rgba(0,0,0,0.25), rgba(0,0,0,0.25) ), url('/livelihood.png') center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-24">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                You can contribute to Electrify Ethiopia by 2030
              </h2>
              <button className="px-6 py-2 bg-amber-400 text-black rounded">Donate →</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
