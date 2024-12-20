import react, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Message = styled.p`
  background: var(--goldTheme);
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  -webkit-text-stroke: 1px black;
  color: transparent;
  background-clip: text;
  background-size: 100% 200%;
  display: ${({ $status }) => ($status === "" ? "none" : "block")};
  margin: -64px 0 64px;
`;

const StatusMessage = ({ status }) => {
  const { t } = useTranslation();

  return (
    <Message $status={status}>
      {status == "Win" ? t("You Win!") : t("You Lose!")}
    </Message>
  );
};

export default StatusMessage;
