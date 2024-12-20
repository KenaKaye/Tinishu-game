import React, { useState } from "react";
import styles from "./DepositStyles.module.css";
import { useTranslation } from "react-i18next";

const GetCoins = () => {
  const [amount, setAmount] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [conversionRate, setConversionRate] = useState(0.1);
  const { t } = useTranslation();

  const handleGetCoins = () => {
    if (amount) {
      setConfirm(true);
    } else {
      alert("Amount is required");
    }
  };

  const handleConfirmPurchase = () => {
    setConfirm(false);
  };

  return (
    <div className={styles.getCoinsScreen}>
      {!confirm ? (
        <>
          <img src="/telebirr.png" alt="Telebirr" width={70} />
          <input
            type="number"
            placeholder={t("Amount")}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="button" onClick={handleGetCoins}>
            {t("Deposit")}
          </button>
        </>
      ) : (
        <div className={styles.confirmGetCoins}>
          <p>
            Confirm purchase of {amount} coins for Birr{" "}
            {amount * conversionRate}?
          </p>
          <button
            className={`${styles.confirmationButtons}`}
            type="button"
            onClick={handleConfirmPurchase}
          >
            {t("Confirm")}
          </button>
          <button
            className={`${styles.confirmationButtons}`}
            type="button"
            onClick={() => setConfirm(false)}
          >
            {t("Cancel")}
          </button>
        </div>
      )}
    </div>
  );
};

export default GetCoins;
