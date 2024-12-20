import React from "react";
import Countdown from "../Countdown/Countdown";
import styles from "./TimerStyles.module.css";

function Timer({ imageTheme, setStatus, selected, setSelected, chance }) {
  return (
    <div className={`${styles.timer}`}>
      <Countdown
        time={5}
        rest={5000}
        setStatus={setStatus}
        selected={selected}
        setSelected={setSelected}
        chance={chance}
      />
      <img
        src={imageTheme == "Light" ? "clock.png" : "clock-white.png"}
        alt="clock"
        width={40}
        height={40}
      />
    </div>
  );
}

export default Timer;
