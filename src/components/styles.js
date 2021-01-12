import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0%;
`;

export const HeaderWrapper = styled.div`
  background-color: green;
  height: 20px;
`;

export const FooterWrapper = styled.div`
  background-color: yellow;
  height: 20px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const SideBarWrapper = styled.div`
  background-color: blue;
  width: 20vw;
  ul {
    list-style: none;
    text-align: left;
    padding: 0px;
    margin: 0px;
  }
  a {
    text-decoration: none;
  }
`;

export const MainWrapper = styled.div`
  background-color: grey;
  width: 80vw;
`;

export const SubMenuWrapper = styled.div`
  background-color: orange;
  ul {
    display: flex;
    list-style: none;
    text-align: left;
    padding: 0px;
    margin: 0px;
  }
  a {
    text-decoration: none;
  }
`;
