"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

const Logo = ({ width = 96, height = 96, className, ...props }: LogoProps) => {
  return (
    <Image
      src="/images/global/logo-bold.png"
      alt="Apoorva Logo"
      width={width}
      height={height}
      priority
      className={cn("pointer-events-none", className)}
      {...props}
    />
  );
};

export default Logo;
