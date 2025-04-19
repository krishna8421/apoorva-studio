import { create } from "zustand";
import { Position } from "@/lib/types/position";
import { DraggableItem } from "@/lib/types/draggable";

type DraggableState = {
  items: Record<string, DraggableItem>;
  registerItem: (item: Omit<DraggableItem, "isDragging">) => void;
  unregisterItem: (id: string) => void;
  updatePosition: (id: string, position: Position) => void;
  setDragging: (id: string, isDragging: boolean) => void;
  updateSize: (id: string, width: number, height: number) => void;
};

/**
 * Store for managing draggable items state across the application
 */
export const useDraggableStore = create<DraggableState>((set) => ({
  items: {},

  registerItem: (item) => {
    set((state) => ({
      items: {
        ...state.items,
        [item.id]: {
          ...item,
          isDragging: false,
        },
      },
    }));
  },

  unregisterItem: (id) => {
    set((state) => {
      const newItems = { ...state.items };
      delete newItems[id];
      return { items: newItems };
    });
  },

  updatePosition: (id, position) => {
    set((state) => ({
      items: {
        ...state.items,
        [id]: {
          ...state.items[id],
          currentPosition: position,
        },
      },
    }));
  },

  setDragging: (id, isDragging) => {
    set((state) => ({
      items: {
        ...state.items,
        [id]: {
          ...state.items[id],
          isDragging,
        },
      },
    }));
  },

  updateSize: (id, width, height) => {
    set((state) => ({
      items: {
        ...state.items,
        [id]: {
          ...state.items[id],
          size: { width, height },
        },
      },
    }));
  },
}));
