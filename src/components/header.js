import styled from "@emotion/styled";
import icon from "../imgs/Icon.png";

const StyledHeader = styled.header`
  background-color: #06b6d4;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 50px;
`;

const StyledParagraph = styled.p`
  color: white;
  padding-left: 8px;
  margin: 0;
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <img src={icon} alt="icon" />
      <div>
        <StyledParagraph>Add expense to</StyledParagraph>
        <StyledParagraph>Groceries</StyledParagraph>
      </div>
    </StyledHeader>
  );
}

export default Header;
