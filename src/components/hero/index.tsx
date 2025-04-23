import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="pt-40 flex flex-col font-skillet-condensed select-none text-[12rem] leading-[8.5rem] items-center">
        <span>
          I des
          <span className="relative">
            i
            <Image
              src="/images/homepage/dot-of-i.png"
              alt="i dot"
              className="absolute top-6 right-1 z-10 hover:scale-110 transition-all duration-300"
              width={65}
              height={65}
            />
            <div className="absolute top-10 right-1 bg-primary-background w-10 h-8" />
          </span>
          gn
        </span>
        <span>for</span>
        <Image
          src="/images/homepage/impact.png"
          alt="Impact"
          className="select-non"
          width={418}
          height={144}
        />
      </div>
      <div className="relative">
        <Image
          src="/images/homepage/lens-mug-cap-small.png"
          alt="Lens Mug Cap"
          className="absolute -top-36.5 left-22"
          width={100}
          height={100}
        />
        <Image
          src="/images/homepage/len-mug-small.png"
          alt="Lens Mug Cap"
          className="absolute -top-35.5 left-70 -rotate-2 hover:animate-spill-coffee"
          width={199}
          height={128}
        />
        <Image
          src="/images/homepage/coffee-splash-small.png"
          alt="Coffee Splash"
          className="absolute -z-1 bottom-0 left-0"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
