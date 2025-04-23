"use client";

import { useWindowSize } from "usehooks-ts";

const Debug = ({ mount }: { mount: boolean }) => {
  const { width = 0, height = 0 } = useWindowSize();
  if (!mount) return null;
  return (
    <div className="fixed top-0 left-0 m-1 flex gap-1">
      <code className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full">
        h: {height} w: {width}
      </code>
    </div>
  );
};

export default Debug;
