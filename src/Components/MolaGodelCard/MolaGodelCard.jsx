import react from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  background-image: ${({ $image }) => `url(${$image})`};
  background-repeat: no-repeat;
  background-position: ${({ $placement }) =>
      $placement === "2" ? "-30px" : "-10px"}
    top;
  background-size: cover;
  width: 45vw;
  height: 190px;
  border: ${({ selected, $placement }) =>
    selected == $placement ? "2px solid #FFD700" : "none"};
  border-radius: 8px;
  box-shadow: 0 0 10px 4px rgb(39, 39, 39, 0.5);

  div {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom -20px;
    ${({ $placement }) =>
      $placement === "2"
        ? "background-position: 1 -35px bottom 0px;"
        : "background-position: 1 -25px bottom 0px;"};
    background-image: url("Obstruction.png");
    background-size: cover;
    transform: ${({ $placement }) =>
      $placement === "2" ? "scaleX(-1)" : "initial"};
  }
`;

const MolaGodelCard = ({ image, placement, selected, setSelected }) => {
  return (
    <StyledMenu
      selected={selected}
      onClick={() => setSelected(placement)}
      $image={image}
      $placement={placement}
    >
      <div></div>
    </StyledMenu>
  );
};

export default MolaGodelCard;
