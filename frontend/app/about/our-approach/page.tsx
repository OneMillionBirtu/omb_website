import solarwork from "@/public/solarWork.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Aprroach from "@/public/Approach.png";

const Page = () => {
  const info = [
    {
      title: "Innovation",
      description:
        "Co-designing and piloting DRE solutions with communities to validate feasibility and build demand for productive uses of energy.",
    },
    {
      title: "Finance",
      description:
        "Partnering with banks and MFIs to develop tailored financial products, making clean energy technologies affordable for end-users and enterprises.",
    },
    {
      title: "Policy",
      description:
        "Engaging with government stakeholders to advocate for an enabling environment that supports the growth of the DRE sector.",
    },
    {
      title: "Forward & Backward Linkage",
      description:
        "Connecting clean energy suppliers with end-user markets and ensuring access to necessary inputs and technical support.",
    },
    {
      title: "Skill & Capacity Building",
      description:
        "Collaborating with TVETs, universities, and NGOs to enhance local technical and entrepreneurial capabilities for long-term sustainability.",
    },
  ];
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="w-full h-64 md:h-[480px] lg:h-[540px] px-2.5 py-8 rotate-180 inline-flex flex-col justify-center items-start gap-6 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(278deg, rgba(35,37,54,0) 36.12%, rgba(0,80,46,0.5) 72.5%, rgba(0,80,46,0.5) 96.89%),
            linear-gradient(68deg, rgba(0,80,46,0) 22.61%, rgba(0,80,46,0.43) 44.19%, rgba(0,80,46,0.9) 65.77%),
            linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
            url(${solarwork.src})
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "117% 147%",
        }}
      >
        <div className="rotate-180 w-full text-2xl md:text-5xl px-12 font-bold text-white">
          Our Approach
        </div>
      </section>

      {/* TEXT BLOCK */}
      <section className=" px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 flex flex-col gap-6 md:gap-12">
        <div className="flex items-center gap-2.5">
          <div className="w-12 md:w-20 h-0 border-t-2 border-gray-800"></div>
          <div className="text-gray-800 text-xl md:text-2xl font-bold uppercase tracking-widest">
            Understanding Our Approach
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 lg:px-24">
          <div className="w-72 flex flex-col gap-12">
            <div className="text-gray-800 text-4xl md:text-5xl font-bold leading-tight">
              We exist <br /> to <br /> Not Exist
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="text-gray-800 text-xl font-bold leading-8">
              Building self-sustaining ecosystems for lasting change.
            </div>
            <div className="text-gray-800 opacity-70 text-base leading-6">
              At OMB, our ultimate success is creating solutions and systems that outlast our direct
              involvement. We don&apos;t aim to be perpetual implementers; we aim to be catalysts.
              Our approach is centered on building a robust, self-sustaining Decentralized Renewable
              Energy (DRE) ecosystem in Ethiopia. This begins with deep collaboration. We form
              strategic partnerships with grassroots organizations, financial institutions,
              government bodies, and training centers to co-design programs rooted in real community
              needs. We start with Innovation, piloting new technologies and approaches to build
              awareness and validate what works. We then focus on Scale-up, creating linkages
              between ecosystem players—like connecting clean energy enterprises with financing and
              markets—to replicate successful models. Finally, we Amplify by stepping into a
              technical advisory role, promoting knowledge exchange, and facilitating
              ecosystem-driven expansion. The goal is for the local network of
              stakeholders—entrepreneurs, financiers, technicians, and community leaders—to own,
              operate, and grow the ecosystem independently. We measure our impact not just by
              megawatts installed or technologies deployed, but by the strength of the partnerships
              we forge and the local capacity we build, ensuring that the drive for a cleaner, more
              prosperous Ethiopia continues long after our initial role has faded.
            </div>
          </div>
        </div>
      </section>
      {/* Approach Infographics */}
      <section className="w-full flex justify-center items-center">
        <Image src={Aprroach} alt="approach infographics" className="w-80 md:w-108" />
      </section>
      {/* WAVE SECTION */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F7AD1A"
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160V320H0Z"
          ></path>
        </svg>

        <div className="px-8 pb-16  bg-[#F7AD1A] flex flex-wrap justify-center pt-6 gap-6 md:gap-8 lg:gap-12">
          {/* CARD COMPONENT */}
          {info.map((info, i) => (
            <div
              key={i}
              className="md:w-[332px] lg:w-[440px] p-6 md:p-8 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,82,41,0.10)] flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-emerald-900 to-emerald-800 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-neutral-50"></div>
              </div>

              <div className="text-neutral-800 text-xl md:text-2xl font-bold">{info.title}</div>

              <div className="text-neutral-500 text-base leading-6 ">{info.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ELECTRIFY BANNER */}
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

export default Page;
