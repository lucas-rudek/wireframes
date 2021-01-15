import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: sans-serif;
  margin: 0%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  background-color: green;
  height: 50px;
`;

export const HeaderMenuWrapper = styled.div`
  p {
    margin: 15px 20px 20px 70px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const HeaderInfoWrapper = styled.div`
  background-color: blue;
  height: 50px;

  p {
    margin: 15px 20px 20px 70px;
  }
`;

export const FooterWrapper = styled.div`
  background-color: yellow;
  height: 30px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const SideBarWrapper = styled.div`
  background-color: cyan;
  width: 20vw;
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 80px 0px 0px 10px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

export const MainWrapper = styled.div`
  background-color: lightgrey;
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

  li {
    margin: 10px 100px 10px 100px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
