import React, { useState } from "react";
import styles from "./TransferStyles.module.css";
import { useTranslation } from "react-i18next";

const TransferCoins = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [confirm, setConfirm] = useState(false);
  const { t } = useTranslation();

  const handleTransfer = () => {
    if (recipient && amount) {
      setConfirm(true);
    } else {
      alert("All fields are required");
    }
  };

  const handleConfirmTransfer = () => {
    setConfirm(false);
  };

  return (
    <div className={styles.transferCoinsScreen}>
      <img src="/telebirr.png" alt="Telebirr" width={70} />
      {!confirm ? (
        <>
          <input
            type="text"
            placeholder={t("Recipient")}
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="number"
            placeholder={t("Amount")}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="button" onClick={handleTransfer}>
            {t("Transfer")}
          </button>
        </>
      ) : (
        <div className={styles.confirmTransfer}>
          <p>
            Confirm transfer of {amount} coins to {recipient}?
          </p>
          <button
            className={`${styles.confirmationButtons}`}
            type="button"
            onClick={handleConfirmTransfer}
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

export default TransferCoins;
