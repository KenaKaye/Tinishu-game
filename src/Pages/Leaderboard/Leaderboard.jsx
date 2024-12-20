import React, { useState, useEffect } from "react";
import MainContent from "./MainContent.jsx";
import styles from "./LeaderboardStyles.module.css";

const Leaderboard = () => {
  return (
    <div className={`${styles.app}`}>
      <MainContent />
    </div>
  );
};

export default Leaderboard;
