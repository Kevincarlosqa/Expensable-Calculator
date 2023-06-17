import styled from "@emotion/styled";

const StyleDisplay = styled.div `
background-color: white;
width: 100%;
height: 50px;
display:flex;
justify-content: center;
align-items: center;
`;

function Display({state}){
    console.log(state)
    const message = state.operant ? state.prevNumber + state.operant + (state.currentNumber ? state.currentNumber : "") : state.currentNumber
    
    return (
    <StyleDisplay>
        <p>${message}</p>
    </StyleDisplay>)
    ;
}
export default Display;
