"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useDraggable } from "@/hooks/useDraggable";
import { DraggableWrapperProps } from "@/lib/types/draggable";
import { DRAG_ANIMATION } from "@/lib/constants/draggable";

/**
 * A wrapper component that makes its children draggable
 */
const DraggableWrapper = ({
  id,
  children,
  initialPosition,
  snapPosition,
  snapThreshold,
  width = 96,
  height = 96,
  className,
  dragConstraints,
  onPositionChange,
}: DraggableWrapperProps) => {
  const {
    isDragging,
    positionToSnapTo,
    handleDragStart,
    handleDragEnd,
    handleDragTransitionEnd,
    controls,
    elementRef,
  } = useDraggable({
    id,
    initialPosition,
    snapPosition,
    snapThreshold,
    onPositionChange,
  });

  return (
    <>
      {/* Drop zone */}
      {snapPosition && (
        <motion.div
          className={cn(
            "absolute border border-dashed",
            "border-slate-300",
            "bg-slate-100/50",
            "shadow-inner"
          )}
          style={{
            left: positionToSnapTo.x - 4,
            top: positionToSnapTo.y - 4,
            width: width + 8,
            height: height + 8,
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isDragging ? 1 : 0,
            scale: isDragging ? 1.05 : 1,
          }}
          transition={{ duration: DRAG_ANIMATION.OPACITY.duration }}
        />
      )}

      {/* Draggable element */}
      <motion.div
        ref={elementRef}
        drag
        dragMomentum={true}
        dragConstraints={dragConstraints}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragTransitionEnd={handleDragTransitionEnd}
        animate={controls}
        initial={{ x: initialPosition.x, y: initialPosition.y }}
        className={cn("w-fit h-fit absolute", className)}
        style={{ touchAction: "none" }}
        whileDrag={{
          scale: 1.05,
          zIndex: 50,
          cursor: "grabbing",
        }}
        whileTap={{ cursor: "grabbing", scale: 0.95 }}
        whileHover={{ cursor: "grab" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default DraggableWrapper;
