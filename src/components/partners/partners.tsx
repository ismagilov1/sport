import { Navigation } from "swiper/modules";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import PartnerCard from "./partners-card";
import { useCallback, useState } from "react";
import { Swiper as ISwiper, SwiperOptions } from "swiper/types";

export type Partner = {
  id: number;
  name: string;
  description: string;
  img: string;
};

const partners: Partner[] = [
  { id: 1, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 2, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 3, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 4, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 5, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 6, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 7, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
  { id: 8, name: "Название огрнизации", description: "Краткие подробности или комментарии", img: "" },
];

export default function Partners() {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChande = useCallback((swiper: ISwiper) => {
    console.log(swiper);

    setActiveSlide(swiper.activeIndex);
  }, []);
  return (
    <div className="px-4 md:px-10 lg:px-20 mb-10">
      <div className="container py-10">
        <h2 className="text-5xl bebas font-bold mb-10 text-[#3E4E5E]">Партнеры</h2>
        <div className="-mx-10 flex gap-3 ">
          <img src="/path.svg" alt="prev" className="cursor-pointer prev-partner px-1 pb-24 " />
          <Swiper
            onSlideChange={handleSlideChande}
            slidesPerView={slidesPerView}
            navigation={{
              prevEl: ".prev-partner",
              nextEl: ".next-partner",
            }}
            modules={[Navigation]}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <PartnerCard partner={partner} />
              </SwiperSlide>
            ))}
          </Swiper>
          <img src="/path.svg" alt="prev" className="cursor-pointer next-partner rotate-180 px-1 pt-24 " />
        </div>
      </div>
    </div>
  );
}
