import styled from "styled-components";

import {color} from "../../../styles/variables";

export interface Props {
    primary:boolean
}



export const StyledRadiobutton = styled.input<Props>`
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
    content: "";
    width: 16px;
    height: 16px;
    border: 3px solid;
    border-radius: 50%;
    display: inline-block;
    vertical-align: sub;
    margin-right: 16px;
  }
  ${(props) =>
    props.checked &&
    `
        &:after{
            content: '';
            top: 1px;
            left: 5px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
        }`}
  ${(props) =>
    props.primary &&
    `
        &:before{
            border-color:${color.background};
            &:hover{
                border-color:${color.background};
            }
        }
        &::after{
            background: ${color.background};
            &:hover{
                background:${color.background};
            }
        }
    `}
    ${(props) =>
    !props.primary &&
    `
        &:before{
            border-color:${color.primary};
            &:hover{
                border-color:${color.primaryDark};
            }
        }
        &::after{
            background:${color.primary};
            &:hover{
                background:${color.primaryDark};
            }
        }
    `}
`;
