import React from "react";
import styles from "./WalletStyles.module.css";
import MainContent from "./MainContent.jsx";

const Wallet = () => {
  return (
    <div className={`${styles.app}`}>
      <MainContent />
    </div>
  );
};

export default Wallet;
