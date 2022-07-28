// import { ButtonHTMLAttributes } from 'react';
import styled from "styled-components";
import { color } from "../../../styles/variables";

export interface Props {
  small: boolean;
}

const StyledButton = styled.button<Props>`
  cursor: pointer;

  padding: 12px 24px;

  background-color: ${color.primary};
  color: ${color.background};

  border: 3px solid ${color.background};
  border-radius: 40px;

  font-size: 20px;
  letter-spacing: 0.16em;

  text-transform: uppercase;

  transition: all 0.2s ease;
  &:hover,
  &:active {
    background-color: ${color.primaryDark};
    border-color: ${color.primaryDark};
  }
  &:disabled {
    cursor: default;
    background-color: ${color.primaryLight};
    border-color: ${color.primaryLight};
  }
  ${(props) =>
        props.small &&
    `
       font-size: 20px;
    padding: 8px 20px;
    `}
`;

export default StyledButton;
