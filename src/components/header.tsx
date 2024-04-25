import { Navbar } from "./navbar";
import { Button } from "./button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Header = () => {
  return (
    <div className="relative max-h-[805px]">
      <div className="preview-slider">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          autoHeight={true}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg-[url('/fasad.png')] h-[805px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/fasad.png')] h-[805px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/fasad.png')] h-[805px] bg-cover bg-center"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/fasad.png')] h-[805px] bg-cover bg-center"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <header className="relative z-10 max-h-[805px] h-lvh bg-[#000000]/40">
        <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.509807)_0%,_rgba(0,_0,_0,_0.0001)_100%)]">
          <Navbar
            adress={`Г. Екатеринбург, 
        ул. Универсиады, стр. 11`}
            phone="+7 (343) 222 22 33"
          />
        </div>

        <div className="max-w-[1300px] mx-auto ">
          <div className="flex flex-row justify-between pt-[120px] px-[92px]">
            <div>
              <h1 className="uppercase font-bold text-[50px] bebas leading-[53px] max-w-[623px] text-white pb-[28px]">
                СОВРЕМЕННЫЙ КОМПЛЕКС ДЛЯ МЕЖДУНАРОДНЫХ СОРЕВНОВАНИЙ И ТРЕНИРОВОК
                В ЦЕНТРЕ ЕВРАЗИИ
              </h1>
              <Button
                className="py-[19px] px-[26px] text-white font-normal"
                text="Профессиональный спорт"
                image="/icons/cup.svg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="border-l pl-[29px]">
                <p className="text-white text-[18px] leading-[24px] font-light">
                  Суббота, 03 февраля 14:58:03
                </p>
                <p className="font-bold bebas text-[29px] leading-[36px] text-white max-w-[268px]">
                  Прямо сейчас в тренировочном бассейне 65 свободных мест
                </p>
              </div>
              <Button
                className="py-[19px] px-[26px] text-white font-normal"
                text="КУПИТЬ АБОНЕМЕНТ"
                image="/icons/bag.svg"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1300px] mx-auto px-[92px] mt-[142px] max-[993px]:hidden">
          <div className="flex flex-row py-[33px] px-[63px]  bg-[#000000]/70  rounded-full text-white text-[13px] font-light leading-[17px]">
            Мы используем Интернет-сервис «Яндекс.Метрика» и файлы Cookies. Это
            позволяет анализировать взаимодействие посетителей с сайтом ДВВС и
            делать его лучше. Оставаясь на сайте ДВВС, Вы соглашаетесь с
            использованием Интернет-сервиса «Яндекс.Метрика» и файлов Cookies.
            <button className="ml-[63px] uppercase py-[15px] px-[32px] rounded-full border leading-[18px]">
              принять
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
