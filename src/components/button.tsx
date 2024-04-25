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
      className={cn("flex flex-row justify-between rounded-full", className)}
    >
      {text}
      <img className="w-[24px] h-[24px]" src={image} alt={alt} />
    </button>
  );
};
