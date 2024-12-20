import React, { useState } from "react";
import styles from "./MainContentStyles.module.css";
import { useTranslation } from "react-i18next";
import Timer from "../../Components/Timer/Timer";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch.jsx";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

function MainContent() {
  const { t } = useTranslation();
  const [imageTheme, setImageTheme] = useState("");
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState("");

  return (
    <main className={`${styles.mainContent}`}>
      <ThemeSwitch setImageTheme={setImageTheme} />
      <header className={`${styles.title}`}>
        <h1>
          <span className={`${styles.Mola}`}>{t("Ke")}</span>{" "}
          <span className={`${styles.Godel}`}>{t("Amestu")}</span>
        </h1>
        <p className={`${styles.instructions}`}>
          {t("Select Your Lucky Number")}
        </p>
      </header>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.inner}`} style={{ "--quantity": 5 }}>
          {[...Array(5)].map((_, index) => (
            <div
              className={`${styles.card} ${
                selected === index + 1 ? ` ${styles.selected}` : ""
              }`}
              key={index}
              style={{
                "--index": index,
                "--color-card": "212, 175, 55",
              }}
              onClick={() => setSelected(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <Timer
        imageTheme={imageTheme}
        setStatus={setStatus}
        selected={selected}
        setSelected={setSelected}
        chance={5}
      />
      <StatusMessage status={status} />
    </main>
  );
}

export default MainContent;
