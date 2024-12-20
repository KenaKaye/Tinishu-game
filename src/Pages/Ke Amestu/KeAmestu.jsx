import React from "react";
import styles from "./KeAmestuStyles.module.css";
import MainContent from "./MainContent.jsx";

function KeAmestu() {
  return (
    <div className={`${styles.app}`}>
      <MainContent />
    </div>
  );
}

export default KeAmestu;
