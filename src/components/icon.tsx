import React, { FC } from "react";

type IconProps = {
  src: string;
  alt?: string;
};

export const Icon: FC<IconProps> = ({ src, alt }) => {
  return (
    <div className="rounded-full w-[40px] h-[40px] min-[810px]:w-[51px] min-[810px]:h-[51px] bg-[#00A2FF] flex items-center justify-center">
      <img src={src} alt={alt} />
    </div>
  );
};
