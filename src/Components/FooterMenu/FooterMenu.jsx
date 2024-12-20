import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FooterMenuStyles.module.css";

const FooterMenu = ({ setPage }) => {
  const apiUrl = import.meta.env.VITE_API;
  const navigate = useNavigate();

  return (
    <footer className={`${styles.footerMenu}`}>
      <Link
        onClick={() => {
          setPage("Wallet");
        }}
      >
        <button type="button" className={`${styles.footerButtons}`}>
          <img src="wallet.png" alt="wallet" width={40} />
        </button>
      </Link>

      <Link
        onClick={() => {
          setPage("Home");
        }}
      >
        <button type="button" className={`${styles.footerButtons}`}>
          <img src="home.png" alt="home" width={40} />
        </button>
      </Link>

      <Link
        onClick={() => {
          setPage("Leaderboard");
        }}
      >
        <button type="button" className={`${styles.footerButtons}`}>
          <img src="podium.png" alt="leaderboards" width={40} />
        </button>
      </Link>
    </footer>
  );
};

export default FooterMenu;
