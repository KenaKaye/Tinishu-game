import React, { useState, useEffect } from "react";
import styles from "./TinishuSatnStyles.module.css";
import MainContent from "./MainContent.jsx";

const TinishuSatn = () => {
  return (
    <div className={`${styles.app}`}>
      <MainContent />
    </div>
  );
};

export default TinishuSatn;
