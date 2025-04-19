import { Position } from "./position";
import { ReactNode } from "react";

/**
 * Represents a draggable item in the store
 */
export type DraggableItem = {
  id: string;
  originalPosition: Position;
  currentPosition: Position;
  isDragging: boolean;
  size: {
    width: number;
    height: number;
  };
};

/**
 * Props for a draggable item component
 */
export type DraggableItemProps = {
  id: string;
  initialPosition: Position;
  snapPosition: Position;
  width: number;
  height: number;
  component: ReactNode;
};

/**
 * Props for the draggable wrapper component
 */
export type DraggableWrapperProps = {
  id: string;
  children: ReactNode;
  initialPosition: Position;
  snapPosition?: Position;
  snapThreshold?: number;
  width?: number;
  height?: number;
  className?: string;
  dragConstraints?: React.RefObject<HTMLDivElement | null>;
  onPositionChange?: (id: string, position: Position) => void;
};
