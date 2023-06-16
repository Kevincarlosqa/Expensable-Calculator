import styled from "@emotion/styled";

const StyleDisplay = styled.div `
background-color: white;
width: 100%;
height: 50px;
display:flex;
justify-content: center;
align-items: center;
`;

function Display(){
    return (
    <StyleDisplay>
        <p>$0</p>
    </StyleDisplay>)
    ;
}
export default Display;
