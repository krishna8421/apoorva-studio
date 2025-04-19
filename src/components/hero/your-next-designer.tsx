import Image from "next/image";
import React from "react";

const YourNextDesigner = () => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-primary-pink font-bold">
        your next designer, let&apos;s find out?
      </span>
      <div className="flex flex-col gap-5 px-3 py-5 border-4 w-[18rem] border-primary-pink bg-white">
        <div className="flex gap-2">
          <Image
            src="/apoorva.png"
            alt="Apoorva Logo"
            width={46}
            height={52}
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">Apoorva</span>
            <span className="text-base text-primary-dark-gray">
              @multidisciplinary designer
            </span>
          </div>
        </div>
        <div className="text-base">
          You&apos;re welcome to explore what I love doing (and do with heart).
          It&apos;s honest, a little playful, and very much me.
        </div>
      </div>
    </div>
  );
};

export default YourNextDesigner;
