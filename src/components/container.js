import styled from "@emotion/styled";

const StyledContainer = styled.div`
  background-color: gray;
  width: 254px;
  height: 332px;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
