import React, { FC } from "react";

type NavbarProps = {
  adress: string;
  phone: string;
};

export const Navbar: FC<NavbarProps> = ({ adress, phone }) => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <div className="flex flex-row justify-between py-[21px] max-w-[1300px] mx-auto">
        <div className="flex flex-row gap-x-[25px] min-[1150px]:gap-x-[50px] items-center text-white">
          <a href="#" className="max-[588px]:hidden">
            <img src="/Logo.svg"></img>
          </a>
          <a
            href="https://yandex.ru/maps/-/CDVW6RZm"
            className="whitespace-pre-line max-[1090px]:hidden"
          >
            {adress}
          </a>
          <a href="tel:+7 (343) 222 22 33" className="max-[799px]:hidden">
            {phone}
          </a>
        </div>
        <div className="flex flex-row gap-x-[20px] max-[588px]:w-full min-[551px]:gap-x-[40px]">
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
          <button className="max-[588px]:ml-auto">
            <img src="/icons/burger.png" alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};
