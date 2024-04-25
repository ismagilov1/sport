import { Navbar } from "./navbar";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="bg-slate-600">
      <Navbar
        adress={`Г. Екатеринбург, 
        ул. Универсиады, стр. 11`}
        phone="+7 (343) 222 22 33"
      />
      <div className="flex flex-row justify-around">
        <div>
          <h1 className="uppercase font-bold text-[50px]">
            СОВРЕМЕННЫЙ КОМПЛЕКС ДЛЯ МЕЖДУНАРОДНЫХ СОРЕВНОВАНИЙ И ТРЕНИРОВОК В
            ЦЕНТРЕ ЕВРАЗИИ
          </h1>
          <Button
            className="py-[19px] px-[26px] bg-[linear-gradient(156.57deg,#EF33F2_-18.35%,#3544DC_117.49%)]"
            text="Профессиональный спорт"
            image="/icons/cup.svg"
          />
        </div>
        <div>Прямо сейчас в тренировочном бассейне 65 свободных мест</div>
      </div>
    </header>
  );
};
