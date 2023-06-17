import styled from "@emotion/styled";
const StyleKeyboard = styled.div`
  width: 50px;
  height: 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.isOperator ? "#F3F4F6" : "#ffffff"};
  ${(props) => console.log(props.isOperator)}
`;
const StyledParagraph = styled.p`
  color: #4b5563;
  height: 28px;
  font-size: 20px;
  font-weight: 400;
  color: #4b5563;
`;

function Keyboard({ value, isOperator = "false" }) {
  return (
    <StyleKeyboard isOperator={isOperator}>
      <StyledParagraph>{value}</StyledParagraph>
    </StyleKeyboard>
  );
}

export default Keyboard;
