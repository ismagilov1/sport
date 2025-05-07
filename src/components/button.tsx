import { cn } from "@/lib/utils";
import React, { FC } from "react";

type ButtonProps = {
  className?: string;
  text: string;
  image?: string;
  alt?: string;
};

export const Button: FC<ButtonProps> = ({ text, image, alt, className }) => {
  return (
    <button
      className={cn(
        "flex flex-row justify-between items-center rounded-full uppercase bg-[linear-gradient(156.57deg,#EF33F2_-18.35%,#3544DC_117.49%)] btn-hover bg-cover max-w-max",
        className
      )}
    >
      {text}
      <img className="pl-2" src={image} alt={alt} />
    </button>
  );
};
