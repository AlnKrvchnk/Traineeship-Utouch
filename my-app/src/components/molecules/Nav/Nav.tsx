import { link } from "fs"
import NavLink from "../../atoms/NavLink/NavLink"
import StyledNav from "./StyledNav"

import {Link} from '../../../types/Link'

export interface Props {
    links:Link[]
}

const Nav =({links}:Props)=>{
    
    return(
        <StyledNav>
            {links.map((link,index)=>(
                <NavLink to={link.url} key={index}>{link.title}</NavLink>
            ))}
        </StyledNav> 
    )
}

export default Nav