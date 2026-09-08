"use client";

import { motion } from "motion/react";
import { Flower } from "../components";
import Envelope from "../components/Envelope";

type ClosedViewProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export const ClosedView = ({ isOpen, onOpen }: ClosedViewProps) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-99 h-203 md:w-160 md:h-220 lg:w-250 lg:h-220 overflow-visible"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Top-left branch */}
      <Flower
        type="Multiple"
        className="w-50 top-[9%] left-[-20%] md:w-60 md:top-0 md:left-[-10%] lg:w-80 lg:top-[-17%] lg:left-0"
        zIndex={10}
      />

      {/* Center-left small flower */}
      <Flower
        type="Single"
        className="w-30 top-[19%] left-[32%] md:w-40 md:top-[11%] md:left-[30%] lg:w-53 lg:top-[3%] lg:left-[30%]"
      />

      {/* Top-right */}
      <Flower
        type="Alternate-Single"
        className="w-40 top-0 right-[-10%] md:w-50 md:top-[-10%] md:right-[-5%] lg:w-67 lg:top-[-10%] lg:right-[-5%]"
      />

      {/* Bottom-right */}
      <Flower
        type="Alternate-Multiple"
        className="w-50 bottom-[11%] right-[-20%] md:w-60 md:bottom-[2%] md:right-[-10%] lg:w-80 lg:bottom-[-13%] lg:right-0"
        zIndex={10}
      />

      {/* Bottom-left */}
      <Flower
        type="Single"
        className="w-40 bottom-[12%] left-[-10%] md:w-50 md:bottom-0 md:left-0 lg:w-67 lg:bottom-[-12%] lg:left-[0%]"
      />

      {/* Envelope */}
      <div className="relative z-50">
        <Envelope isOpen={isOpen} onOpenAction={onOpen} />
      </div>
    </motion.div>
  );
};
