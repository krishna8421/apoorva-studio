"use client";

import Logo from "@/components/logo";
import DraggableWrapper from "@/components/draggable-wrapper";
import { useRef, useState, useCallback } from "react";
import { Position } from "@/lib/types/position";
import { DraggableItemProps } from "@/lib/types/draggable";
import YourNextDesigner from "@/components/hero/your-next-designer";
import Image from "next/image";
// import { useWindowSize } from "usehooks-ts";
// import Resume from "@/components/hero/resume";

const INITIAL_ITEMS: DraggableItemProps[] = [
  {
    id: "landing-page-logo",
    initialPosition: { x: 108, y: 36 },
    snapPosition: { x: 108, y: 36 },
    width: 96,
    height: 96,
    component: <Logo />,
  },
  {
    id: "landing-page-your-next-designer",
    initialPosition: { x: 96, y: 192 },
    snapPosition: { x: 96, y: 192 },
    width: 288,
    height: 231.25,
    component: <YourNextDesigner />,
  },
  // {
  //   id: "landing-page-resume",
  //   initialPosition: { x: 400, y: 400 },
  //   snapPosition: { x: 400, y: 400 },
  //   width: 288,
  //   height: 231.25,
  //   component: <Resume />,
  // },
];
export default function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<DraggableItemProps[]>(INITIAL_ITEMS);
  const positionsRef = useRef<Record<string, Position>>({});

  // const { width = 0, height = 0 } = useWindowSize();

  const handlePositionChange = useCallback(
    (id: string, newPosition: Position) => {
      positionsRef.current[id] = newPosition;

      setItems((prevItems) => {
        const itemToUpdate = prevItems.find((item) => item.id === id);
        if (!itemToUpdate) return prevItems;

        if (
          itemToUpdate.initialPosition.x === newPosition.x &&
          itemToUpdate.initialPosition.y === newPosition.y
        ) {
          return prevItems;
        }

        return prevItems.map((item) =>
          item.id === id ? { ...item, initialPosition: newPosition } : item
        );
      });
    },
    []
  );

  return (
    <div className="min-h-screen w-full relative bg-back" ref={constraintsRef}>
      {items.map((item) => (
        <DraggableWrapper
          key={item.id}
          id={item.id}
          initialPosition={item.initialPosition}
          snapPosition={item.snapPosition}
          dragConstraints={constraintsRef}
          onPositionChange={handlePositionChange}
          width={item.width}
          height={item.height}
          className={"bg-transparent"}
        >
          {item.component}
        </DraggableWrapper>
      ))}
      {/* <code className="absolute bottom-0 right-0 text-xs">
        h: {height} w: {width}
      </code> */}

      <div className="pt-48 flex flex-col font-skillet-condensed select-none text-[12rem] leading-[8.5rem] items-center">
        <span>
          I des
          <span className="relative">
            i
            <Image
              src="/i-dot.png"
              alt="i dot"
              className="absolute top-6 right-1 z-10"
              width={65}
              height={65}
            />
            <div className="absolute top-10 right-1 bg-primary-background w-10 h-8" />
          </span>
          gn
        </span>
        <span>for</span>
        <Image
          src="/impact.png"
          alt="Impact"
          className="select-non"
          width={418}
          height={144}
        />
      </div>
    </div>
  );
}
