import styled from "styled-components"
import { color } from "../../../styles/variables"

const StyledPage=styled.div`
    background-color: ${color.background};
    min-width:100vw;
    min-height: 100vh;
    height: 100%;
    width:100%;
    display: flex;
    justify-content:end;
`
const StyledForm=styled.div`
    background-color: ${color.primary};
    min-height: 100vh;
    width:45vw;
`
export {StyledPage, StyledForm}