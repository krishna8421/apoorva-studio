"use client";

import { useRef } from "react";
import Debug from "@/components/debug";
import Draggable from "@/components/draggable";
import Hero from "@/components/hero";

export default function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="min-h-screen w-full relative bg-background"
      ref={constraintsRef}
    >
      <Draggable constraintsRef={constraintsRef} />
      <Debug mount={true} />
      <Hero />
      <div className="h-screen bg-black"></div>
    </div>
  );
}
