"use client";

import Logo from "@/components/logo";
import { DraggableItemProps } from "@/lib/types/draggable";
import { useRef, useState, useCallback } from "react";
import { Position } from "@/lib/types/position";
import YourNextDesigner from "@/components/hero/your-next-designer";
import Resume from "@/components/hero/resume";
import DraggableWrapper from "../draggable-wrapper";

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
  {
    id: "landing-page-resume",
    initialPosition: { x: 1035, y: 300 },
    snapPosition: { x: 1035, y: 300 },
    width: 296,
    height: 340,
    component: <Resume />,
  },
];

const Draggable = ({
  constraintsRef,
}: {
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [items, setItems] = useState<DraggableItemProps[]>(INITIAL_ITEMS);
  const positionsRef = useRef<Record<string, Position>>({});

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
    <>
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
    </>
  );
};

export default Draggable;
