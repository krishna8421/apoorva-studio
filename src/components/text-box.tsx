"use client";

import { cn } from "@/lib/utils";

/**
 * Props for the TextBox component
 */
type TextBoxProps = {
  text?: string;
  className?: string;
  width?: number;
  height?: number;
};

/**
 * A simple text box component that can be used in draggable elements
 */
const TextBox = ({
  text = "Drag me",
  className,
  width = 200,
  height = 100,
  ...props
}: TextBoxProps) => {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-md shadow-md border border-gray-200",
        "flex items-center justify-center",
        "pointer-events-none",
        className
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: "100%",
      }}
      {...props}
    >
      <p className="text-center text-base font-medium">{text}</p>
    </div>
  );
};

export default TextBox;
