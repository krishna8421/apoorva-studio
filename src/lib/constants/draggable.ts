/**
 * The threshold distance in pixels for snapping draggable items
 */
export const SNAP_THRESHOLD = 150;

/**
 * Animation properties for draggable items
 */
export const DRAG_ANIMATION = {
  SPRING: {
    type: "spring" as const,
    stiffness: 600,
    damping: 35,
  },
  OPACITY: {
    duration: 0.2,
  },
};
