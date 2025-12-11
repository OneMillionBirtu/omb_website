// components/LivelihoodCard.jsx
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

export type LivelihoodCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode; // NOT string
  image: string;
  lists: { title: string; items: string[] }[];
  layout?: "right" | "left";
  graphics?: React.ReactNode | null;
  id?: string;
};

export default function LivelihoodCard({
  title,
  description,
  icon,
  image,
  lists,
  layout = "right", // "right" = image on right, "left" = image on left
  graphics = null,
  id,
}: LivelihoodCardProps) {
  const ImageSection = (
    <div className="hidden lg:w-[36%] h-108 rounded-[20px] lg:flex items-center justify-center">
      <Image
        src={image}
        alt="section image"
        className="rounded-[20px] object-cover h-full"
        width={480}
        height={480}
      />
    </div>
  );

  return (
    <div
      className="px-6 py-6 md:px-9 md:py-12 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,82,41,0.80)] outline -outline-offset-1 outline-neutral-200 inline-flex justify-start items-center gap-12"
      id={id}
    >
      {/* LEFT IMG */}
      {layout === "left" && ImageSection}

      <div className="flex-1 inline-flex flex-col justify-center md:justify-start items-start gap-3">
        {/* TITLE + ICON + DESCRIPTION */}
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2 ">
            <div className=" w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-linear-to-br from-emerald-900 to-emerald-800 rounded-full">
              {icon}
            </div>
            <div className="text-black  text-lg md:text-3xl font-bold">{title}</div>
          </div>

          <p className="opacity-60 text-black w-full text-base leading-6 ">{description}</p>
        </div>

        {/* GRAPHICS (optional) */}
        {graphics && (
          <div className="w-full p-4 md:p-0  md:w-full flex justify-center">{graphics}</div>
        )}

        {/* LIST COLUMNS */}
        <div className="w-full   flex flex-col md:flex-row  gap-3  md:gap-2 justify-between">
          {lists.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-2.5">
              <div className="text-black md:text-lg font-medium opacity-80">{col.title}</div>

              <div className="flex flex-col gap-2">
                {col.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaRegCircleCheck />
                    <div className="text-neutral-500 text-sm md:text-base">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMG */}
      {layout === "right" && ImageSection}
    </div>
  );
}
