import styled from "styled-components"
import { ProgressPlugin } from "webpack";
import { color } from "../../../styles/variables"

export interface DivProps{
    isComplited:boolean,
    isSelected:boolean,
}

export const Container =styled.div<DivProps>`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background: transparent;
    border: 3px solid ${color.background};
    border-radius:24px;
    transition: all 0.3s ease;
    ${props => props.isComplited &&`
        background: ${color.primaryDark};
        border: 3px solid ${color.primaryDark};
    `}
    ${props => props.isSelected &&`
        background: ${color.primaryDark};
        border: 3px solid ${color.background};
    `}
`;

export const Div=styled.div`
    display:grid;
    padding: 16px;
`;

export const Button = styled.button`
    border-radius: 0 0 20px 20px;
    border: none;
    background: none;
    border-top: solid 3px ${color.background};
    text-align: center;
    padding: 16px 24px;
    color: ${color.background};
    font-size: 20px;
    letter-spacing: 0.16em;
    cursor:pointer;
    transition: all 0.3s ease;

    
`;