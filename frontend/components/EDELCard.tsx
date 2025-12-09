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
};

export default function LivelihoodCard({
  title,
  description,
  icon,
  image,
  lists,
  layout = "right", // "right" = image on right, "left" = image on left
  graphics = null,
}: LivelihoodCardProps) {
  const ImageSection = (
    <div className="w-[36%] h-108 rounded-[20px] flex items-center justify-center">
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
    <div className="px-9 py-12 rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,82,41,0.80)] outline -outline-offset-1 outline-neutral-200 inline-flex justify-start items-center gap-12">
      {/* LEFT IMG */}
      {layout === "left" && ImageSection}

      <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
        {/* TITLE + ICON + DESCRIPTION */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center bg-linear-to-br from-emerald-900 to-emerald-800 rounded-full">
              {icon}
            </div>
            <div className="text-black text-3xl font-bold">{title}</div>
          </div>

          <p className="opacity-60 text-black text-base leading-6">{description}</p>
        </div>

        {/* GRAPHICS (optional) */}
        {graphics && <div className="w-full flex justify-center">{graphics}</div>}

        {/* LIST COLUMNS */}
        <div className="w-full flex justify-between">
          {lists.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-2.5">
              <div className="text-black text-lg font-medium opacity-80">{col.title}</div>

              <div className="flex flex-col gap-2">
                {col.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaRegCircleCheck />
                    <div className="text-neutral-500 text-base">{item}</div>
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
