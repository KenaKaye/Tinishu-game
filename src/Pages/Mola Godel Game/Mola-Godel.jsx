import React from "react";
import MainContent from "./MainContent";
import styles from "./Mola-GodelStyles.module.css";

function MolaGodel() {
  return (
    <div className={`${styles.app}`}>
      <MainContent />
    </div>
  );
}

export default MolaGodel;
