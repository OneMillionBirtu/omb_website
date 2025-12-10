// data/Edelcontent.ts

import Image from "next/image";
import { FaCoins } from "react-icons/fa6";
import { Lamp } from "lucide-react";
import stonks from "@/public/Icons/stonks.svg";
import incubation from "@/public/KaleWork.jpg";
import incu_graphics from "@/public/Icons/incu_graphics.png";
import { LivelihoodCardProps } from "@/components/EDELCard";
import knowldege from "@/public/hero-image.jpg";
import { PiBooks } from "react-icons/pi";

export type LivelihoodSection = Omit<LivelihoodCardProps, "graphics" | "icon"> & {
  icon: React.ReactNode;
  graphics?: React.ReactNode | null;
};

export const LivelihoodSections: LivelihoodSection[] = [
  {
    title: "Livelihood Innovation",
    description:
      "Transform livelihoods by deploying 56 decentralized renewable energy (DRE) technologies across 10 applications in 56 pilot sites, with 10% user co-financing.",
    icon: <Image src={stonks} alt="icon" width={32} height={32} />,
    image: incubation.src,
    layout: "right",
    graphics: <div>An infographic showing how it is done</div>,
    lists: [
      {
        title: "[Title]",
        items: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
      },
      {
        title: "[Title]",
        items: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
      },
    ],
    id: "livelihood",
  },

  {
    title: "Financing Livelihoods",
    description:
      "Enabling DRE-powered livelihood solutions to become affordable and accessible through inclusive financing.",
    icon: <FaCoins className="text-white w-6 h-6" />,
    image: incubation.src,
    layout: "left",
    graphics: <div>[An Info graphics showing how it is done]</div>,
    lists: [
      {
        title: "[Title]",
        items: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
      },
      {
        title: "[Title]",
        items: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
      },
    ],
    id: "financing",
  },
  {
    title: "Incubation",
    description:
      "Transform livelihoods by deploying 56 decentralized renewable energy (DRE) technologies across pilot sites.",
    icon: <Lamp className="text-white w-6 h-6" />,
    image: incubation.src,
    layout: "right",
    graphics: <Image src={incu_graphics} alt="incubation graphics" className="w-108" />,
    lists: [
      {
        title: "Technology Innovators",
        items: [
          "Seed funding for product development",
          "Technical training and expert mentorship",
          "Business development services and consulting",
          "Comprehensive M&E tools and support",
          "Collaborative co-working space",
          "Prototype development and scaling support",
        ],
      },
      {
        title: "Clean Energy Enterprises",
        items: [
          "Seed funding for operational expenses",
          "Technical training and deployment mentorship",
          "Business development consulting",
          "M&E support",
          "Co-working space access",
          "Guided market validation",
        ],
      },
    ],
    id: "incubation",
  },
  {
    title: "Learning & Knowledge Dissemination",
    description:
      "Transform livelihoods by deploying 56 decentralized renewable energy (DRE) technologies across pilot sites.",
    icon: <PiBooks className="text-white w-6 h-6" />,
    image: incubation.src,
    layout: "left",
    graphics: <div>[An Info graphics showing how it is done]</div>,
    lists: [
      {
        title: "Lorem ipsum dolor sit amet",
        items: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
      },
      {
        title: "Lorem ipsum dolor sit amet",
        items: [
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet",
        ],
      },
    ],
    id: "knowledge",
  },
] as const;
