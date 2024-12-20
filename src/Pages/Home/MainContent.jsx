import { React, useEffect, useState } from "react";
import styles from "./MainContentStyles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch.jsx";

const MainContent = ({ setPage }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [imageTheme, setImageTheme] = useState("Light");

  return (
    <main className={`${styles.mainContent}`}>
      <ThemeSwitch setImageTheme={setImageTheme} />
      <header className={styles.header}>
        <img
          src={imageTheme == "Light" ? "logo.png" : "logo-white.png"}
          alt="Tinishu Logo"
          width={136}
        />
        <h1>{t("Let's Play")}</h1>
      </header>

      <section className={styles.gameLists}>
        <Link onClick={() => setPage("Mola-Godel")}>
          <p>{t("Game")} 1</p>
          <h1 className={`${styles.title}`}>
            <span className={`${styles.Mola}`}>{t("MOLA")}</span>{" "}
            <span className={`${styles.Godel}`}>{t("GODEL")}</span>
          </h1>
        </Link>
        <Link
          onClick={() => {
            setPage("Tinishu-Satn");
          }}
        >
          <p>{t("Game")} 2</p>
          <h1 className={`${styles.title}`}>
            <span className={`${styles.Tinishu}`}>{t("Tinishu")}</span>{" "}
            <span className={`${styles.Satn}`}>{t("Satn")}</span>
          </h1>
        </Link>
        <Link
          onClick={() => {
            setPage("Ke-Amestu");
          }}
        >
          <p>{t("Game")} 3</p>
          <h1 className={`${styles.title}`}>
            <span className={`${styles.Ke}`}>{t("Ke")}</span>{" "}
            <span className={`${styles.Amestu}`}>{t("Amestu")}</span>
          </h1>
        </Link>
      </section>

      <div className={`${styles.getCoins}`}>
        <Link
          onClick={() => {
            setPage("Wallet");
          }}
        >
          <button type="button">
            <img src="telebirr.png" alt="" width={40} />
            <p>{t("Get Coins")}</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default MainContent;
