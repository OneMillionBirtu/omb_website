import solarwork from "@/public/solarWork.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Aprroach from "@/public/Approach.png";

const Page = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="w-full h-[540px] px-2.5 py-8 rotate-180 inline-flex flex-col justify-center items-start gap-6 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(278deg, rgba(35,37,54,0) 36.12%, rgba(0,80,46,0.5) 72.5%, rgba(0,80,46,0.5) 96.89%),
            linear-gradient(68deg, rgba(0,80,46,0) 22.61%, rgba(0,80,46,0.43) 44.19%, rgba(0,80,46,0.9) 65.77%),
            linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
            url(${solarwork.src})
          `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-148px -205px",
          backgroundSize: "117% 147%",
        }}
      >
        <div className="rotate-180 w-full text-5xl px-12 font-bold text-white">Our Approach</div>
      </section>

      {/* TEXT BLOCK */}
      <section className="px-12 py-16 flex flex-col gap-12">
        <div className="flex items-center gap-2.5">
          <div className="w-20 h-0 border-t-2 border-gray-800"></div>
          <div className="text-gray-800 text-2xl font-bold uppercase tracking-widest">
            Understanding Our Approach
          </div>
        </div>

        <div className="flex gap-16 px-24">
          <div className="w-72 flex flex-col gap-12">
            <div className="text-gray-800 text-5xl font-bold leading-tight">
              We exist <br /> to <br /> Not Exist
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="text-gray-800 text-xl font-bold leading-8">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </div>
            <div className="text-gray-800 opacity-70 text-base leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis deleniti dolorum modi
              saepe autem atque illum corrupti inventore temporibus repudiandae. Similique atque
              nostrum eligendi doloribus odit ducimus saepe officiis fugit unde, accusantium at
              adipisci rerum! Eligendi, dolor itaque? Odit facere deserunt ex quisquam, libero
              voluptates officia vero culpa eum quod quo laudantium unde illum dolor error qui
              voluptas dolore iure quae corrupti eius. Itaque, quidem quo. Nihil cum qui iure
              laudantium, consequuntur quis modi illum ullam laboriosam cumque adipisci
              necessitatibus, tenetur quisquam harum. Voluptas quaerat, nisi modi, adipisci quia
              nemo iusto quibusdam doloremque fugit ea beatae labore. Ducimus, voluptatibus
              consequuntur. Aliquid esse eum debitis excepturi dolorum sit soluta consequatur
              accusamus iure tempora, laborum temporibus quia aspernatur repellat ullam doloremque
              nulla aut est ipsa dolor nobis qui? Totam ut laboriosam corporis excepturi, sit in
              distinctio doloribus. Blanditiis repudiandae, odio perferendis doloribus sapiente quis
              vero nostrum mollitia veniam. Asperiores repellendus hic quibusdam ducimus odit rerum
              eaque qui autem porro, voluptas accusamus maiores minima quo. Ipsa earum perspiciatis
              libero sunt harum iure odio reprehenderit nesciunt eveniet saepe expedita, animi
              facere. Magnam enim facere quia earum quisquam fugiat minus tempore, maiores at
              similique expedita in veniam quos quidem ducimus ad ea voluptatem culpa deserunt.
            </div>
          </div>
        </div>
      </section>
      {/* Approach Infographics */}
      <section className="w-full flex justify-center items-center">
        <Image src={Aprroach} alt="approach infographics" />
      </section>
      {/* WAVE SECTION */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F7AD1A"
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160V320H0Z"
          ></path>
        </svg>

        <div className="pb-16 bg-[#F7AD1A] flex flex-wrap justify-center gap-12">
          {/* CARD COMPONENT */}
          {[
            "Innovation",
            "Finance",
            "Policy",
            "Forward & Backward Linkage",
            "Skill & Capacity Building",
          ].map((title, i) => (
            <div
              key={i}
              className="w-[479px] p-8 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,82,41,0.10)] flex flex-col gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-emerald-900 to-emerald-800 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-neutral-50"></div>
              </div>

              <div className="text-neutral-800 text-2xl font-bold">{title}</div>

              <div className="text-neutral-500 text-base leading-6">
                We identify and address market gaps that prevent communities from accessing
                opportunities. By building functional markets and value chains, we create
                sustainable pathways out of poverty.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELECTRIFY BANNER */}
      <section className="container mx-auto px-16 py-12">
        <div
          className="rounded-xl overflow-hidden relative h-56 md:h-72"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/livelihood.png') center / cover no-repeat",
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
    </>
  );
};

export default Page;
