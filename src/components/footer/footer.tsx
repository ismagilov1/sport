import Logo from "../logo/logo";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className="text-white bg-footer px-5 md:px-10 xl:px-20">
      <div className="container py-10 text-center sm:text-left">
        <div
          className={
            styles.footer +
            " grid place-items-center md:place-items-start gap-10 xl:gap-y-14 sm:grid-cols-[2fr_1fr] xl:grid-cols-[auto_auto_max-content]"
          }
        >
          <div className="grid grid-cols-1 xl:col-span-2 items-start lg:grid-cols-2 gap-10 h-full">
            <Logo size={400} />
            <div className="font-light grid justify-center lg:justify-self-end sm:min-w-[max-content] sm:grid-cols-[repeat(3,auto)] gap-2">
              <p className="sm:col-span-3 text-center lg:mt-3"> г.Екатеринбург, ул.Универсиады, стр.11</p>
              <p>+7 343 222-22-33</p>
              <span className="hidden w-[1px] h-full sm:block  bg-white"></span>
              <p>info@dvvs-ekb.ru</p>
            </div>
          </div>
          <div className={styles.info + " font-light self-end"}>
            <h5>Время работы</h5>
            <p>Ежедневно с 8:00 до 21:00</p>
            <h5>Почтовый адрес</h5>
            <p>620060, г. Екатеринбург, ул. Универсиады, строение 11</p>
          </div>

          <div className="sm:order-1 grid justify-around place-self-end xs:justify-between grid-cols-[repeat(2,auto)] xs:grid-cols-[repeat(3,auto)] sm:grid-cols-[repeat(2,auto)] lg:grid-cols-[repeat(3,auto)] gap-y-8 w-full text-center items-center">
            <span className="col-span-2 xs:col-span-1 sm:col-span-2 lg:col-span-1 text-4xl bebas whitespace-nowrap">СОЦИАЛЬНЫЕ СЕТИ</span>
            <span>YT</span>
            <span>Vk</span>
          </div>
          <hr className="lg:hidden sm:col-span-2  w-full" />
          <p className="text-xs sm:text-sm md:col-span-1 xl:col-span-2 text-left font-light self-end">
            © 2024 Государственное автономное нетиповое образовательное учреждение Свердловской области «ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА» со
            структурным подразделением «Спортивная школа имени А.В. Попова»
          </p>
        </div>
      </div>
    </footer>
  );
};
