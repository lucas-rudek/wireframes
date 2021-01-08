import styled from "styled-components";

export const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0;
  display: grid;
  grid-template:
    "header header header" 80px
    "side container container" 3fr
    "footer footer footer" 80px;
`;

export const HeaderWrapper = styled.div`
  margin: 0;
  background-color: green;
  grid-area: header;
`;

export const ContainerWrapper = styled.div`
  margin: 0;
  background-color: red;
  grid-area: container;
`;

export const SideBarWrapper = styled.div`
  margin: 0;
  background-color: blue;
  grid-area: side;
`;

export const FooterWrapper = styled.div`
  margin: 0;
  background-color: yellow;
  grid-area: footer;
`;
