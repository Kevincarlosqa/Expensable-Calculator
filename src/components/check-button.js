import styled from "@emotion/styled";
import check from "../imgs/check.png";

const StyledCheckButton = styled.div`
  background-color: #06b6d4;
  width: 50px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  grid-column: 5;
  grid-row: 3 / 5;
`;

function CheckButton({ children, onClick }) {
  return (
    <StyledCheckButton onClick={onClick}>
      <img src={check} alt="check" />
    </StyledCheckButton>
  );
}

export default CheckButton;
