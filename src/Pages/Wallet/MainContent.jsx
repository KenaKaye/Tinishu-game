import React, { useState } from "react";
import styles from "./MainContentStyles.module.css";
import Deposit from "./Tabs/Deposit/Deposit";
import Transfer from "./Tabs/Transfer/Transfer";
import Withdraw from "./Tabs/Withdraw/Withdraw";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch.jsx";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Deposit");
  const { t } = useTranslation();

  return (
    <main className={`${styles.mainContent}`}>
      <ThemeSwitch />
      <div></div>
      <div className={`${styles.tabs}`}>
        <button
          className={activeTab === "Deposit" ? styles.activeTab : ""}
          onClick={() => setActiveTab("Deposit")}
        >
          {t("Deposit")}
        </button>
        <button
          className={activeTab === "Withdraw" ? styles.activeTab : ""}
          onClick={() => setActiveTab("Withdraw")}
        >
          {t("Withdraw")}
        </button>
        <button
          className={activeTab === "Transfer" ? styles.activeTab : ""}
          onClick={() => setActiveTab("Transfer")}
        >
          {t("Transfer")}
        </button>
      </div>
      {activeTab == "Deposit" ? (
        <Deposit />
      ) : activeTab == "Withdraw" ? (
        <Withdraw />
      ) : (
        <Transfer />
      )}
    </main>
  );
};

export default MainContent;
