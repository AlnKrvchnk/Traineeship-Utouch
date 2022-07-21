import { link } from "fs"
import NavLink from "../../atoms/NavLink/NavLink"
import {StyledNav, Div} from "./StyledNav"

import {Link} from '../../../app/types/Link'

export interface Props {
    links:Link[]
}

const Nav =({links}:Props)=>{
    
    return(
        <StyledNav>
            <Div>
            {links.map((link,index)=>(
                <NavLink to={link.url} key={index}>{link.title}</NavLink>
            ))}</Div>
        </StyledNav> 
    )
}

export default Nav