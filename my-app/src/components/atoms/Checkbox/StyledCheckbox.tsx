import styled from "styled-components";

import {color} from "../../../styles/variables";

export interface Props {
    primary:boolean
}



export const StyledCheckbox = styled.input<Props>`
  cursor:pointer;
  opacity: 0;
  height: 24px;
  width: 24px;
  position: absolute;
  z-index: 1;
`;

export interface ILabel extends Props {
  checked: boolean;
}

export const StyledLabel = styled.label<ILabel>`
  &:before {
    cursor:pointer;
    content: "";
    width: 16px;
    height: 16px;
    border: 3px solid ${color.background};
    border-radius: 5px;
    display: inline-block;
    vertical-align: sub;
    margin-right: 16px;
  }
  ${(props) =>
    props.checked &&
    `&:before {
    background:${color.background}
  }`}
  
`;
