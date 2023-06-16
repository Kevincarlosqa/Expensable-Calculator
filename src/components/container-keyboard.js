import styled from "@emotion/styled";

const StyledContainerKeyboard = styled.div `
background-color: #F3F4F6;
width: 100%;
display:grid;
grid-template-columns: auto auto auto auto auto;
`;

function ContainerKeyboard({children}){
    return (
        <StyledContainerKeyboard>
            {children}
        </StyledContainerKeyboard>
    );
}

export default ContainerKeyboard;