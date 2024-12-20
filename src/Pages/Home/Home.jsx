import styles from "./Home.module.css";
import React, { useState } from "react";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import MainContent from "./MainContent.jsx";
import MolaGodel from "../Mola Godel Game/Mola-Godel.jsx";
import Wallet from "../Wallet/Wallet.jsx";
import TinishuSatn from "../Tinishu Satn/TinishuSatn.jsx";
import KeAmestu from "../Ke Amestu/KeAmestu.jsx";
import Leaderboard from "../Leaderboard/Leaderboard.jsx";

function Home() {
  const apiUrl = import.meta.env.VITE_API;
  const [page, setPage] = useState("Home");

  return (
    <>
      <NavBar setPage={setPage} />
      {page === "Home" ? (
        <div className={`${styles.app}`}>
          <MainContent setPage={setPage} />
        </div>
      ) : page === "Mola-Godel" ? (
        <MolaGodel />
      ) : page === "Wallet" ? (
        <Wallet />
      ) : page === "Tinishu-Satn" ? (
        <TinishuSatn />
      ) : page === "Ke-Amestu" ? (
        <KeAmestu />
      ) : page === "Leaderboard" ? (
        <Leaderboard />
      ) : (
        <div>404</div>
      )}
      <FooterMenu setPage={setPage} />
    </>
  );
}

export default Home;
