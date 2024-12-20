import React, { useState } from "react";
import styles from "./WithdrawStyles.module.css";
import { useTranslation } from "react-i18next";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [conversionRate, setConversionRate] = useState(0.004);
  const { t } = useTranslation();

  const handleWithdraw = () => {
    if (amount) {
      setConfirm(true);
    } else {
      alert("Amount is required");
    }
  };

  const handleConfirmWithdraw = () => {
    setConfirm(false);
  };

  return (
    <div className={styles.getMoneyScreen}>
      {!confirm ? (
        <>
          <img src="/telebirr.png" alt="Telebirr" width={70} />
          <input
            type="number"
            placeholder={t("Amount")}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="button" onClick={handleWithdraw}>
            {t("Withdraw")}
          </button>
        </>
      ) : (
        <div className={styles.confirmGetMoney}>
          <p>
            Confirm Withdraw of {amount} coins for Birr{" "}
            {amount * conversionRate}?
          </p>
          <button
            className={`${styles.confirmationButtons}`}
            type="button"
            onClick={handleConfirmWithdraw}
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

export default Withdraw;
