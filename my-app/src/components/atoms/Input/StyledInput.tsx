// import { ButtonHTMLAttributes } from 'react';
import styled from "styled-components";
import { color } from "../../../styles/variables";

export interface Props {
    primary:boolean
} 


const StyledInput = styled.input<Props>`
  padding: 8px 16px;
  font-size: 20px;
  outline: none;
  border: solid 3px transparent;
  background-color: transparent;
  margin: 4px 0;
  transition: all 0.3s ease;
  &:hover {

    padding-bottom: 3px;
    margin-bottom: 11px;
    border-bottom: 1px solid;
    border-radius: 0px;
  }
  &:focus {
    border-radius: 32px;
    margin: 4px 0;
    padding-bottom: 8px;
    border-bottom-width: 3px;
  }

  ${(props) =>
    props.primary &&`   
        color: ${color.background};
        &::placeholder {
            color: ${color.background};
        }
        &:hover {
            border-bottom-color: ${color.background};
        }
        &:focus {
            border-color: ${color.background};
        }
    
     `}
  ${(props) =>
    !props.primary &&`
        border-radius: 32px 0 0 32px;
        color: ${color.background};
        border-color:${color.background};

        &::placeholder {
            color: ${color.background};
        }
        &:hover,&:focus {
            margin: 4px 0;
            padding-bottom: 8px;
            border-radius: 32px 0 0 32px;
            border-bottom-width: 3px;
            background:${color.background};
            border-color:${color.primaryDark};
            color:${color.primaryDark};
            &::placeholder {
            color:${color.primaryDark};
        }
        }
        &:focus {
            color: ${color.dark};
        }
        `}
    
`;

export default StyledInput;
