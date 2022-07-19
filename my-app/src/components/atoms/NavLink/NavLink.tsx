import React from "react";
import { ButtonHTMLAttributes } from "react";
import { NavLinkProps } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";


const NavLink = ({to,children}:NavLinkProps) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>
};

export default  NavLink;
