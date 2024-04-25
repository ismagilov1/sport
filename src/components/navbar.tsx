import React, { FC } from "react";

type NavbarProps = {
  adress: string;
  phone: string;
};

export const Navbar: FC<NavbarProps> = ({ adress, phone }) => {
  return (
    <div className="flex flex-row justify-between py-[21px] max-w-[1300px] mx-auto">
      <div className="flex flex-row gap-x-[50px] items-center text-white">
        <a href="#" className="max-[550px]:hidden">
          <img src="/Logo.svg"></img>
        </a>
        <a
          href="https://yandex.ru/maps/-/CDVW6RZm"
          className="whitespace-pre-line max-[925px]:hidden"
        >
          {adress}
        </a>
        <a href="tel:+7 (343) 222 22 33" className="max-[705px]:hidden">
          {phone}
        </a>
      </div>
      <div className="flex flex-row gap-x-[20px] max-[550px]:w-full min-[551px]:gap-x-[40px]">
        <button>
          <img className="" src="/icons/search.png" alt="search" />
        </button>
        <button>
          <img src="/icons/glasses.png" alt="search" />
        </button>
        <button className="flex items-center text-white">
          ВХОД
          <img className="pl-[10px]" src="/icons/log-in.png" alt="log-in" />
        </button>
        <button className="max-[550px]:ml-auto">
          <img src="/icons/burger.png" alt="menu" />
        </button>
      </div>
    </div>
  );
};
