"use client";

import { motion } from "motion/react";
import { Flower } from "../components";
import Envelope from "../components/Envelope";

type OpenedViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const OpenedView = ({ isOpen, onClose }: OpenedViewProps) => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-90 h-203 md:w-160 md:h-220 lg:w-250 lg:h-220 overflow-visible"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Top-left branch */}
      <Flower
        type="Multiple"
        className="w-50 top-[21%] left-[-21%] md:w-60 md:top-[16%] md:left-[-8%] lg:w-80 lg:top-[4.5%] lg:left-[0.5%]"
        zIndex={10}
      />

      {/* Center-left small flower */}
      <Flower
        type="Single"
        className="w-25 top-[17%] left-[50%] md:w-40 md:top-[3%] md:left-[51%] lg:w-53 lg:top-[-13%] lg:left-[50%]"
        zIndex={10}
      />

      {/* Top-right */}
      <Flower
        type="Alternate-Single"
        className="w-40 top-[5%] right-[-15%] md:w-50 md:top-[-10%] md:right-[-10%] lg:w-67 lg:top-[-22%] lg:right-[-5%]"
      />

      {/* Bottom-right */}
      <Flower
        type="Alternate-Multiple"
        className="w-50 bottom-[9%] right-[-24%] md:w-60 md:bottom-[-4.5%] md:right-[-9.5%] lg:w-80 lg:bottom-[-22.5%] lg:right-[-0.4%]"
        zIndex={10}
      />

      {/* Bottom-left */}
      <Flower
        type="Single"
        className="w-40 bottom-[9%] left-[-20%] md:w-50 md:bottom-[-6%] md:left-[-9%] lg:w-67 lg:bottom-[-24.5%] lg:left-[-0.5%]"
        zIndex={10}
      />

      {/* Envelope */}
      <div className="relative">
        <Envelope isOpen={isOpen} onCloseAction={onClose} />
      </div>
    </motion.div>
  );
};
