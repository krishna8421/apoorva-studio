import Image from "next/image";
import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col border-4 border-primary-pink relative bg-white">
      <div className="absolute -top-36 left-4 -z-1">
        <div className="relative">
          <Image
            src="/images/homepage/pinwheel-stand.png"
            alt="Pinwheel Stand"
            width={219}
            height={266}
            className=""
          />
          <Image
            src="/images/homepage/pinwheel.png"
            alt="Pinwheel"
            width={130}
            height={130}
            className="absolute -top-7 right-4 animate-spin-slow"
          />
        </div>
      </div>
      <div className="border-b w-[18rem] border-primary-purple px-2 py-1">
        apoorva_resume.pdf
      </div>
      <div className="">
        <Image
          src="/images/homepage/resume-cover-small.png"
          alt="Resume Cover"
          width={219}
          height={266}
          className="mx-auto"
        />
      </div>
      <div className="border-t border-primary-purple px-2 py-1">
        apoorva_resume.pdf
      </div>
    </div>
  );
};

export default Resume;
