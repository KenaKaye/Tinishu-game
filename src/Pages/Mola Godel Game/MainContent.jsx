import { React, useState, useEffect } from "react";
import styles from "./MainContentStyles.module.css";
import { useTranslation } from "react-i18next";
import MolaGodelCard from "../../Components/MolaGodelCard/MolaGodelCard";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch.jsx";
import Timer from "../../Components/Timer/Timer";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

function MainContent() {
  const [selected, setSelected] = useState("");
  const { t } = useTranslation();
  const [imageTheme, setImageTheme] = useState("");
  const [status, setStatus] = useState("");

  return (
    <main className={`${styles.mainContent}`}>
      <ThemeSwitch setImageTheme={setImageTheme} />
      <header className={`${styles.title}`}>
        <h1>
          <span className={`${styles.Mola}`}>{t("MOLA")}</span>{" "}
          <span className={`${styles.Godel}`}>{t("GODEL")}</span>
        </h1>
        <p className={`${styles.instructions}`}>{t("Least Picked Wins")}</p>
      </header>
      <div className={`${styles.images}`}>
        <MolaGodelCard
          image="Rashford.jpeg"
          placement="1"
          selected={selected}
          setSelected={setSelected}
        />

        <MolaGodelCard
          image="DeBruyne.jpeg"
          placement="2"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Timer
        imageTheme={imageTheme}
        setStatus={setStatus}
        selected={selected}
        setSelected={setSelected}
      />
      <StatusMessage status={status} />
    </main>
  );
}

export default MainContent;
