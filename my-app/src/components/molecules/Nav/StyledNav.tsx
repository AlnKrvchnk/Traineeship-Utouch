import styled from "styled-components";

const StyledNav= styled.nav`
  display: flex;
  overflow: hidden;
  `;



const Div= styled.div`
    display: flex;
    width:100%;
    overflow-x: scroll;
    &::-webkit-scrollbar{
      display:none
    }
  `;

export { Div,  StyledNav};