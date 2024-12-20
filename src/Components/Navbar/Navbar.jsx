import React from "react";
import { useState, useEffect } from "react";
import styles from "./NavbarStyles.module.css";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setPage }) => {
  const [coins, setCoins] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API;

  //   useEffect(async () => {
  //     const response = await fetch(`${apiUrl}/coinBalance`);
  //     const data = await response.json();
  //     setCoins(data.coinBalance);
  //   }, []);

  return (
    <nav className={`${styles.navBar}`}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
      <Link
        className={`${styles.CoinToWallet}`}
        onClick={() => {
          setPage("Wallet");
        }}
      >
        <div className={`${styles.balance}`}>
          <h2>{coins}</h2>
          <img src="coins.png" alt="" width={36} />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
