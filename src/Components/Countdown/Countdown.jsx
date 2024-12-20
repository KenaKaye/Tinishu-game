import React, { useState, useEffect } from "react";

const Countdown = ({
  time,
  rest,
  setStatus,
  selected,
  setSelected,
  chance,
}) => {
  const [seconds, setSeconds] = useState(time);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const startCountdown = () => {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(id);
            return 0;
          }
        });
      }, 1000);
      setIntervalId(id);
    };

    startCountdown();

    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    if (seconds === 0) {
      setStatus(
        selected == ""
          ? ""
          : Math.floor(Math.random() * chance) === selected - 1
          ? "Win"
          : "Lose"
      );
      const timeout = setTimeout(() => {
        setSeconds(time);
        setStatus("");
        setSelected("");
      }, rest);
      return () => clearTimeout(timeout);
    }
  }, [seconds, setStatus, time, rest]);

  useEffect(() => {
    if (seconds === time) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(id);
            return 0;
          }
        });
      }, 1000);
      setIntervalId(id);
    }
  }, [seconds, time]);

  return <span>{seconds}</span>;
};

export default Countdown;
