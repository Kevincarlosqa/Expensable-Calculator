import styled from "@emotion/styled";
import icon from "../imgs/Icon.png";

const StyledHeader = styled.header`
  background-color: #06b6d4;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 50px;
  color: white;
  .p {
    color: blue;
  }
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <img src={icon} alt="icon" />
      <div>
        <p>Add expense to</p>
        <p>Groceries</p>
      </div>
    </StyledHeader>
  );
}

export default Header;
