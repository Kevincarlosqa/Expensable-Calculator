import styled from "@emotion/styled";
const StyleKeyboard = styled.div`
  width: 50px;
  height: 50px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledParagraph = styled.p`
  color: #4b5563;
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  color: #4b5563;
`;

function Keyboard({ value }) {
  return (
    <StyleKeyboard>
      <StyledParagraph>{value}</StyledParagraph>
    </StyleKeyboard>
  );
}

export default Keyboard;
