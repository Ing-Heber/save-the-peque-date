import Image from "next/image";
import { FC } from "react";

export type FlowerType =
  "Single" | "Alternate-Single" | "Multiple" | "Alternate-Multiple";

interface FlowerImageProps {
  alt: string;
  src: string;
  width: number;
  height: number;
}

const flowerSrc: Record<FlowerType, FlowerImageProps> = {
  Single: {
    alt: "Single flower",
    src: "/flower.png",
    width: 496,
    height: 482,
  },
  "Alternate-Single": {
    alt: "Alternate single flower",
    src: "/alternate-flower.png",
    width: 422,
    height: 418,
  },
  Multiple: {
    alt: "Multiple flowers",
    src: "/flowers.png",
    width: 496,
    height: 851,
  },
  "Alternate-Multiple": {
    alt: "Alternate multiple flowers",
    src: "/alternate-flowers.png",
    width: 537,
    height: 880,
  },
};

interface FlowerProps {
  type: FlowerType;
  /** Tailwind classes for size, position, visibility — e.g. "w-[42vw] top-[-6%] left-[-6%] lg:w-[280px] lg:top-[4%]" */
  className?: string;
  zIndex?: number;
}

export const Flower: FC<FlowerProps> = ({
  type,
  className = "",
  zIndex = 5,
}) => {
  const src = flowerSrc[type];
  return (
    <Image
      className={`absolute pointer-events-none select-none ${className} z-${zIndex}`}
      src={src.src}
      width={src.width}
      height={src.height}
      alt={src.alt}
      loading="eager"
    />
  );
};
