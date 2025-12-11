import Logoipsum from "@/public/Logos/Logoipsum.svg";
import Image from "next/image";
import LogoCarousel from "./logocarousel";
const OurSupporters = () => {
  const LogoArray = [Logoipsum.src, Logoipsum.src, Logoipsum.src, Logoipsum.src, Logoipsum.src];

  return (
    <div className="px-6 md:px-16 w-full flex flex-col justify-start items-start gap-12">
      <div className="justify-start text-gray-800 text-xl md:text-2xl font-bold uppercase tracking-widest">
        our Supporters
      </div>
      {/* md and above: show carousel */}
      <div className="hidden md:flex w-full  justify-center">
        <LogoCarousel logos={LogoArray} />
      </div>

      {/* small screens: show static logos */}
      <div className="md:hidden  flex justify-center items-center p-4 overflow-hidden ">
        <div className="flex flex-wrap gap-10">
          {LogoArray.map((logo, i) => (
            <div key={i} className="lex justify-center items-center">
              <Image
                src={logo}
                alt={`logo-${i}`}
                width={140}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSupporters;
