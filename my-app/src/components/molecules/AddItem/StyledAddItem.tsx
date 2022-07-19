import styled from 'styled-components';
import { color } from '../../../styles/variables';

const StyledButton = styled.button`
    cursor:pointer;
    font-size: 20px;
    padding: 8px 20px;

    background-color: ${color.primary };
    color:${color.background };

    border: 3px solid ${color.background};
    border-radius:0 32px 32px 0;

    letter-spacing: 0.16em;

    text-transform: uppercase;

    transition: all 0.2s ease;
    &:hover, &:active{
        background-color: ${ color.primaryDark};
        border-color: ${color.primaryDark};
    }
    &:disabled{
        cursor: default;
        background-color: ${ color.primaryLight};
        border-color: ${color.primaryLight};
    }
`


// const StyledButton = styled (Button)`
//     border:none;
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
// `;
export {StyledButton}