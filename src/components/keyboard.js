import styled from "@emotion/styled";
const StyleKeyboard = styled.div `
width: 50px;
height: 50px;
background: #FFFFFF;
display:flex;
justify-content: center;
align-items: center;
`;
const StyledParagraph = styled.p`
  color: #4b5563;
  height: 28px;
  font-size : 20px;
  font-weight: 400;
  color: #4B5563;
`;

function Keyboard(){
    return(
        <StyleKeyboard>
            <StyledParagraph>
               1
            </StyledParagraph>
        </StyleKeyboard>
    );

}

export default Keyboard;