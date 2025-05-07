import Logo from "../logo/logo";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className="text-white bg-footer px-4 md:px-10 lg:px-20">
      <div className="container py-10">
        <div className={styles.footer + " grid gap-x-10 gap-y-14 lg:grid-cols-[1fr_max-content] "}>
          <div>
            <div className="flex gap-10 justify-between lg:justify-start items-center flex-wrap">
              <Logo size={400} />
              <div className="font-light">
                г.Екатеринбург, ул.Универсиады, стр.11
                <div>+7 343 222-22-33 | info@dvvs-ekb.ru</div>
              </div>
            </div>
          </div>
          <div className={styles.info + " font-light"}>
            <h5>Время работы</h5>
            <p>Ежедневно с 8:00 до 21:00</p>
            <h5>Почтовый адрес</h5>
            <p>620060, г. Екатеринбург, ул. Универсиады, строение 11</p>
          </div>
          <div className="order-1 lg:order-none">
            <p className="text-sm font-light">
              © 2024 Государственное автономное нетиповое образовательное учреждение Свердловской области «ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА» со
              структурным подразделением «Спортивная школа имени А.В. Попова»
            </p>
          </div>
          <div>
            <div className="flex justify-between items-end">
              <span className="text-4xl bebas">СОЦИАЛЬНЫЕ СЕТИ</span>
              <span className="">YT</span>
              <span className="">Vk</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
