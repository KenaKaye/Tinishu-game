import React, { useState } from "react";
import styles from "./MainContentStyles.module.css";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch.jsx";
import Timer from "../../Components/Timer/Timer";
import StatusMessage from "../../Components/StatusMessage/StatusMessage";

const MainContent = () => {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState();
  const [imageTheme, setImageTheme] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (box) => {
    setClicked(box);
  };

  const handleConfirmation = () => {
    // alert("You have chosen box " + clicked);
  };
  const boxNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main className={`${styles.mainContent}`}>
      <ThemeSwitch setImageTheme={setImageTheme} />
      <header className={`${styles.title}`}>
        <h1>
          <span className={`${styles.Tinishu}`}>{t("Tinishu")}</span>{" "}
          <span className={`${styles.Satn}`}>{t("Satn")}</span>
        </h1>
        <p className={`${styles.instructions}`}>
          {t("Least Chosen Box Wins! Choose a box and see if you can win!")}
        </p>
      </header>
      <section className={`${styles.gameRing}`}>
        {boxNumbers.map((box) => (
          <button
            className={`${styles.box} ${
              clicked == box ? styles.selectedBox : ""
            }`}
            key={box}
            onClick={() => {
              handleClick(box);
            }}
          >
            {box}
          </button>
        ))}
      </section>
      <Timer
        imageTheme={imageTheme}
        setStatus={setStatus}
        selected={clicked}
        setSelected={setClicked}
      />
      <button
        type="button"
        className={`${styles.choose}`}
        onClick={() => handleConfirmation()}
      >
        {t("Choose")}
      </button>

      <StatusMessage status={status} />
    </main>
  );
};

export default MainContent;
