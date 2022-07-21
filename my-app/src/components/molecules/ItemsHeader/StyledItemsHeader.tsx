import styled from "styled-components";
import { color } from "../../../styles/variables";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
    background: transparent;
    border:none;
    outline: none;
    font-size:20px;
    font-size: 600;
    color:${color.background};
    /* transition: all 0.2s ease; */
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`