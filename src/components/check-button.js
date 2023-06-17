import styled from "@emotion/styled";
import check from "../imgs/check.png";

const StyledCheckButton = styled.div`
  background-color: #06b6d4;
  width: 50px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CheckButton({ children }) {
  return (
    <StyledCheckButton>
      <img src={check} alt="check" />
    </StyledCheckButton>
  );
}

export default CheckButton;
