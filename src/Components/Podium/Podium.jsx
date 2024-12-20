import react, { useState, useEffect } from "react";
import styled from "styled-components";

const Standing = styled.div`
  width: 90%;
  height: 50px;
  background-color: var(--cardTheme);
  box-shadow: var(--boxShadow);

  color: var(--textColor);
  display: flex;
  border-radius: 12px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
  }

  h1,
  h3 {
    background: ${({ $placement }) =>
      $placement === 1
        ? "linear-gradient(135deg, #ffd700, #ffac33)"
        : $placement === 2
        ? "linear-gradient(135deg, #c0c0c0, #dcdcdc)"
        : $placement === 3
        ? "linear-gradient(135deg, #cd7f32, #c27d38)"
        : "linear-gradient(135deg, #e0e0e0, #b3b3b3)"};
  }
  h1 {
    width: 20%;
    color: var(--buttonText);
  }
  h2 {
    width: 60%;
  }
  h3 {
    width: 20%;
    color: var(--buttonText);
  }
`;

const Podium = ({ placement, number, coins }) => {
  return (
    <Standing $placement={placement}>
      <h1>{placement}</h1>
      <h2>{number}</h2>
      <h3>{coins}</h3>
    </Standing>
  );
};

export default Podium;
