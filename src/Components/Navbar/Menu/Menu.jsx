import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(280deg, #ffd700, #ffbf00, #daa520);
  height: 100vh;
  width: 44%;
  padding: 6rem 1.4rem;
  padding-right: 0;

  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 5;

  a,
  button {
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;
    background: none;
    border: none;
    text-align: left;

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }) => {
  const { t, i18n } = useTranslation();
  const [font, setFont] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setFont(lng);
  };

  useEffect(() => {
    changeLanguage(localStorage.getItem("i18nextLng"));
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "font-family",
      font == "am" ? "'Noto Sans Ethiopic', sans-serif" : "'Exo 2', sans-serif"
    );
  }, [font]);

  return (
    <StyledMenu open={open}>
      <a href="/contact">{t("Contact Us")}</a>
      <a href="/share">{t("Share Link")}</a>
      <a href="/logout">{t("Logout")}</a>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("am")}>አማርኛ</button>
    </StyledMenu>
  );
};

export default Menu;
