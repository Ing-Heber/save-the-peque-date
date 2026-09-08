"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { atcb_action } from "add-to-calendar-button-react";
import type { AddToCalendarActionType } from "add-to-calendar-button-react";

type EnvelopeProps = {
  isOpen: boolean;
  onOpenAction?: () => void;
  onCloseAction?: () => void;
};

const weddingCalendarEvent: AddToCalendarActionType = {
  name: "Boda de Mey & Héber",
  startDate: "2027-02-27",
  endDate: "2027-02-27",
  location: "Ex Hacienda Nogueras, Comala",
  options: ["Google", "Apple", "iCal", "Microsoft365", "Outlook.com", "Yahoo"],
  listStyle: "modal",
  language: "es",
};

export default function Envelope({
  isOpen,
  onOpenAction: onOpen,
  onCloseAction: onClose,
}: EnvelopeProps) {
  const envelopeImage = isOpen ? "/envelope-open.png" : "/envelope-closed.png";

  return (
    <div className="relative">
      {/* Envelope image */}
      <Image
        className={"h-auto md:w-140 lg:w-186"}
        src={envelopeImage}
        alt="Envelope"
        style={{
          objectFit: "contain",
          filter:
            "drop-shadow(0 24px 48px rgba(0,0,0,0.22)) drop-shadow(0 6px 14px rgba(0,0,0,0.14))",
        }}
        priority
        width={2202}
        height={1570}
      />

      {/* Details card - shown when open */}
      {isOpen && (
        <div className="absolute z-20 bottom-[4.8%] right-0 w-[66.4%] h-auto">
          <div className="absolute left-0 right-0 top-[17.5%] h-fit md:top-[18.5%] lg:top-[19%] flex items-center justify-center">
          <button
            type="button"
            className="group cursor-pointer whitespace-nowrap bg-transparent px-2 py-1 font-bold leading-4 text-[#5f5f5c] transition-opacity [font-family:var(--font-cinzel)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f5f5c]"
            onClick={() => void atcb_action(weddingCalendarEvent)}
          >
            <span className="inline-block text-[10px] underline decoration-[#5f5f5c]/60 decoration-1 underline-offset-4 transition-all duration-300 ease-out group-hover:tracking-wide group-hover:text-[#4a4a47] group-hover:decoration-[#4a4a47] group-hover:drop-shadow-[0_1px_4px_rgba(95,95,92,0.35)] group-focus-visible:tracking-wide group-active:scale-95 md:text-[13px] lg:text-[16px]">
              RESERVA NUESTRA FECHA
            </span>
          </button>
          </div>
          <Image
            src="/detail-card.png"
            alt="Details"
            width={495}
            height={754}
          />
        </div>
      )}

      {isOpen && (
        <button
          type="button"
          className="absolute bottom-[2%] left-1/2 z-30 -translate-x-1/2 cursor-pointer bg-transparent px-2 py-1 font-bold leading-4 text-[#5f5f5c] transition-opacity [font-family:var(--font-cinzel)] hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f5f5c]"
          onClick={onClose}
        >
          <span className="text-[10px] md:text-[13px] lg:text-[16px]">
            VOLVER
          </span>
        </button>
      )}

      {/* Wax seal — centered, slightly below mid-point */}
      {!isOpen && (
        <div
          className="absolute z-10"
          style={{
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20%",
            aspectRatio: "1 / 1",
          }}
        >
          <motion.button
            type="button"
            aria-label="Abrir invitación"
            className="group block h-full w-full cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f5f5c]"
            onClick={onOpen}
            animate={{ scale: [1, 1.08, 1.08, 1] }}
            transition={{
              duration: 4.4,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
            whileTap={{ scale: 0.94 }}
            style={{ transformOrigin: "center" }}
          >
            <Image
              src="/save-the-date-seal-transparent.png"
              alt="Wax seal"
              fill
              sizes="min-w-[112px]"
              className="drop-shadow-[0_3px_8px_rgba(0,0,0,0.22)] transition-[filter] duration-300 ease-out group-hover:brightness-110 group-hover:drop-shadow-[0_6px_16px_rgba(120,20,20,0.45)] group-focus-visible:brightness-110 group-focus-visible:drop-shadow-[0_6px_16px_rgba(120,20,20,0.45)]"
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.button>
        </div>
      )}
    </div>
  );
}
