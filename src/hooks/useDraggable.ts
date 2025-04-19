import { useState, useRef, useEffect } from "react";
import { Position } from "@/lib/types/position";
import { SNAP_THRESHOLD } from "@/lib/constants/draggable";
import { PanInfo, useAnimationControls } from "motion/react";

type UseDraggableProps = {
  id: string;
  initialPosition: Position;
  snapPosition?: Position;
  snapThreshold?: number;
  onPositionChange?: (id: string, position: Position) => void;
};

export function useDraggable({
  id,
  initialPosition,
  snapPosition,
  snapThreshold = SNAP_THRESHOLD,
  onPositionChange,
}: UseDraggableProps) {
  const controls = useAnimationControls();
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragPositionRef = useRef<Position>(initialPosition);
  const initializedRef = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // The position to snap to (either provided or initial position)
  const positionToSnapTo = snapPosition || initialPosition;

  const calculateDistance = (pos1: Position, pos2: Position) => {
    const dx = Math.abs(pos1.x - pos2.x);
    const dy = Math.abs(pos1.y - pos2.y);
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleDragStart = () => {
    setIsDragging(true);
    const { x, y } = position;
    dragPositionRef.current = { x, y };
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const newPosition = {
      x: dragPositionRef.current.x + info.offset.x,
      y: dragPositionRef.current.y + info.offset.y,
    };

    const distance = calculateDistance(newPosition, positionToSnapTo);

    if (distance < snapThreshold) {
      // Snap to original position with animation
      controls.start({
        x: positionToSnapTo.x,
        y: positionToSnapTo.y,
        transition: { type: "spring", stiffness: 600, damping: 35 },
      });

      setPosition(positionToSnapTo);
      if (onPositionChange) {
        onPositionChange(id, positionToSnapTo);
      }
    } else {
      setPosition(newPosition);
      if (onPositionChange) {
        onPositionChange(id, newPosition);
      }
    }
  };

  const handleDragTransitionEnd = () => {
    // Check if we need to snap after momentum has settled
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const currentPosition = { x: rect.left, y: rect.top };
      const distance = calculateDistance(currentPosition, positionToSnapTo);

      if (distance < snapThreshold) {
        controls.start({
          x: positionToSnapTo.x,
          y: positionToSnapTo.y,
          transition: { type: "spring", stiffness: 600, damping: 35 },
        });

        setPosition(positionToSnapTo);
        if (onPositionChange) {
          onPositionChange(id, positionToSnapTo);
        }
      }
    }
  };

  // Initialize the position only once
  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;

      // Initialize the position
      setPosition(initialPosition);

      // Report initial position only once
      if (onPositionChange) {
        onPositionChange(id, initialPosition);
      }
    }
  }, [id, initialPosition, onPositionChange]);

  return {
    position,
    isDragging,
    positionToSnapTo,
    handleDragStart,
    handleDragEnd,
    handleDragTransitionEnd,
    controls,
    elementRef,
  };
}
