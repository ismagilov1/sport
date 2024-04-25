import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icon } from "./icon";
import { Button } from "./button";

export const Events = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto my-[100px] flex flex-col">
        <h2 className="bebas text-[60px] text-[#3E4E5E] leading-[53px]">
          БЛИЖАЙШИЕ СОБЫТИЯ
        </h2>
        <a
          className="pt-[15px] text-[#3E4E5E] flex flex-row items-center"
          href="#"
        >
          КАЛЕНДАРЬ ВСЕХ СОБЫТИЙ
          <img src="/icons/arrow-right.svg" className="ml-[10px]" alt="" />
        </a>
        <div className="w-full mt-[40px]">
          <Swiper
            autoHeight={true}
            slidesPerView={"auto"}
            // spaceBetween={30}
            className="mySwiper overflow-visible"
          >
            <SwiperSlide className="max-[809px]:max-w-[260px] max-w-[806px] bg-[url('/Bitmap.png')] bg-center bg-cover rounded-[20px] min-[810px]:rounded-[8px] mr-[10px] min-[810px]:mr-[30px]">
              <div className="flex flex-col justify-between max-[809px]:min-h-[260px] min-h-[343px] h-full py-[15px] px-[15px] min-[810px]:py-[19px] min-[810px]:px-[26px]">
                <div className="flex gap-x-[10px] min-[810px]:gap-x-[21px]">
                  <Icon src="/icons/electric.svg" />
                  <Icon src="/icons/bag.svg" />
                </div>
                <div className="flex flex-col gap-y-[13px] min-[810px]:flex-row justify-between">
                  <div className="flex flex-col gap-y-[6px]">
                    <p className="max-w-[70px] text-[12px] min-[810px]:text-[16px] bebas leading-[21px] text-white min-[810px]:mb-[-10px]">
                      12 марта 2024
                    </p>
                    <p className="font-bold text-[20px] leading-[20px] min-[810px]:text-[30px] min-[810px]:leading-53px bebas text-white">
                      Спектакль на воде «Сказ о русских берегах»
                    </p>
                    <a
                      href="https://yandex.ru/maps/-/CDVW6RZm"
                      className="flex flex-row text-white gap-x-[10px] items-center font-light text-[10px] min-[810px]:text-[14px]"
                    >
                      <img src="/icons/marker.svg" alt="" />
                      Демонстрационный бассейн
                    </a>
                  </div>
                  <Button
                    text="Купить билет"
                    className="text-white py-[12px] px-[56px] min-[810px]:py-[16px] min-[810px]:px-[40px] text-[14px] min-[810px]:text-[16px] leading-[16px] min-[810px]:leading-[18px] self-center min-[810px]:self-end"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-[809px]:max-w-[260px] max-w-[806px] bg-[url('/Bitmap.png')] bg-center bg-cover rounded-[20px] min-[810px]:rounded-[8px] mr-[10px] min-[810px]:mr-[30px]">
              <div className="flex flex-col justify-between max-[809px]:min-h-[260px] min-h-[343px] h-full py-[15px] px-[15px] min-[810px]:py-[19px] min-[810px]:px-[26px]">
                <div className="flex gap-x-[10px] min-[810px]:gap-x-[21px]">
                  <Icon src="/icons/electric.svg" />
                  <Icon src="/icons/bag.svg" />
                </div>
                <div className="flex flex-col gap-y-[13px] min-[810px]:flex-row justify-between">
                  <div className="flex flex-col gap-y-[6px]">
                    <p className="max-w-[70px] text-[12px] min-[810px]:text-[16px] bebas leading-[21px] text-white min-[810px]:mb-[-10px]">
                      12 марта 2024
                    </p>
                    <p className="font-bold text-[20px] leading-[20px] min-[810px]:text-[30px] min-[810px]:leading-53px bebas text-white">
                      Спектакль на воде «Сказ о русских берегах»
                    </p>
                    <a
                      href="https://yandex.ru/maps/-/CDVW6RZm"
                      className="flex flex-row text-white gap-x-[10px] items-center font-light text-[10px] min-[810px]:text-[14px]"
                    >
                      <img src="/icons/marker.svg" alt="" />
                      Демонстрационный бассейн
                    </a>
                  </div>
                  <Button
                    text="Купить билет"
                    className="text-white py-[12px] px-[56px] min-[810px]:py-[16px] min-[810px]:px-[40px] text-[14px] min-[810px]:text-[16px] leading-[16px] min-[810px]:leading-[18px] self-center min-[810px]:self-end"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-[809px]:max-w-[260px] max-w-[806px] bg-[url('/Bitmap.png')] bg-center bg-cover rounded-[20px] min-[810px]:rounded-[8px] mr-[10px] min-[810px]:mr-[30px]">
              <div className="flex flex-col justify-between max-[809px]:min-h-[260px] min-h-[343px] h-full py-[15px] px-[15px] min-[810px]:py-[19px] min-[810px]:px-[26px]">
                <div className="flex gap-x-[10px] min-[810px]:gap-x-[21px]">
                  <Icon src="/icons/electric.svg" />
                  <Icon src="/icons/bag.svg" />
                </div>
                <div className="flex flex-col gap-y-[13px] min-[810px]:flex-row justify-between">
                  <div className="flex flex-col gap-y-[6px]">
                    <p className="max-w-[70px] text-[12px] min-[810px]:text-[16px] bebas leading-[21px] text-white min-[810px]:mb-[-10px]">
                      12 марта 2024
                    </p>
                    <p className="font-bold text-[20px] leading-[20px] min-[810px]:text-[30px] min-[810px]:leading-53px bebas text-white">
                      Спектакль на воде «Сказ о русских берегах»
                    </p>
                    <a
                      href="https://yandex.ru/maps/-/CDVW6RZm"
                      className="flex flex-row text-white gap-x-[10px] items-center font-light text-[10px] min-[810px]:text-[14px]"
                    >
                      <img src="/icons/marker.svg" alt="" />
                      Демонстрационный бассейн
                    </a>
                  </div>
                  <Button
                    text="Купить билет"
                    className="text-white py-[12px] px-[56px] min-[810px]:py-[16px] min-[810px]:px-[40px] text-[14px] min-[810px]:text-[16px] leading-[16px] min-[810px]:leading-[18px] self-center min-[810px]:self-end"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-[809px]:max-w-[260px] max-w-[806px] bg-[url('/Bitmap.png')] bg-center bg-cover rounded-[20px] min-[810px]:rounded-[8px] mr-[10px] min-[810px]:mr-[30px]">
              <div className="flex flex-col justify-between max-[809px]:min-h-[260px] min-h-[343px] h-full py-[15px] px-[15px] min-[810px]:py-[19px] min-[810px]:px-[26px]">
                <div className="flex gap-x-[10px] min-[810px]:gap-x-[21px]">
                  <Icon src="/icons/electric.svg" />
                  <Icon src="/icons/bag.svg" />
                </div>
                <div className="flex flex-col gap-y-[13px] min-[810px]:flex-row justify-between">
                  <div className="flex flex-col gap-y-[6px]">
                    <p className="max-w-[70px] text-[12px] min-[810px]:text-[16px] bebas leading-[21px] text-white min-[810px]:mb-[-10px]">
                      12 марта 2024
                    </p>
                    <p className="font-bold text-[20px] leading-[20px] min-[810px]:text-[30px] min-[810px]:leading-53px bebas text-white">
                      Спектакль на воде «Сказ о русских берегах»
                    </p>
                    <a
                      href="https://yandex.ru/maps/-/CDVW6RZm"
                      className="flex flex-row text-white gap-x-[10px] items-center font-light text-[10px] min-[810px]:text-[14px]"
                    >
                      <img src="/icons/marker.svg" alt="" />
                      Демонстрационный бассейн
                    </a>
                  </div>
                  <Button
                    text="Купить билет"
                    className="text-white py-[12px] px-[56px] min-[810px]:py-[16px] min-[810px]:px-[40px] text-[14px] min-[810px]:text-[16px] leading-[16px] min-[810px]:leading-[18px] self-center min-[810px]:self-end"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide className="max-w-[806px] bg-[url('/Bitmap.png')] bg-cover rounded-[8px]">
              <div className="flex flex-col justify-between min-h-[343px] h-full py-[19px] px-[26px]">
                <div className="flex gap-x-[21px]">
                  <Icon src="/icons/electric.svg" />
                  <Icon src="/icons/bag.svg" />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="max-w-[70px] bebas leading-[21px] text-white mb-[-16px]">
                      12 марта 2024
                    </p>
                    <p className="font-bold text-[30px] leading-53px bebas text-white">
                      Спектакль на воде «Сказ о русских берегах»
                    </p>
                    <a
                      href="https://yandex.ru/maps/-/CDVW6RZm"
                      className="flex flex-row text-white gap-x-[10px] items-center font-light text-[14px]"
                    >
                      <img src="/icons/marker.svg" alt="" />
                      Демонстрационный бассейн
                    </a>
                  </div>
                  <Button
                    text="Купить билет"
                    className="text-white py-[16px] px-[40px] leading-[18px] self-end"
                  />
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
