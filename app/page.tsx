'use client';
import { ClosedView } from "./views/ClosedView";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { OpenedView } from "./views/OpenedView";


export default function InviteePage() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main
      className="min-h-screen h-fit flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#e8e6df",
        backgroundImage: "url('/save-date-bg.png')",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
      }}
    >
      <AnimatePresence mode="wait">
        {isOpened ? (
          <OpenedView
            key="opened"
            isOpen={isOpened}
            onClose={() => setIsOpened(false)}
          />
        ) : (
          <ClosedView
            key="closed"
            isOpen={isOpened}
            onOpen={() => setIsOpened(true)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
