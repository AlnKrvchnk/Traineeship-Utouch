import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../styles/variables";

const StyledNavLink = styled(NavLink)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 10vw;
  width: 100%;
  text-align: center;
  text-decoration: none;
  background-color: ${color.primaryDark};
  color: ${color.background};
  cursor: pointer;
  border: none;
  padding: 16px 24px;
  font-size: 24px;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${color.primary};
  }
  &:active,
  &.active {
    background-color: ${color.primary};
    color: ${color.background};
    cursor: default;
    &:hover {
      background-color: "inherit";
    }
  }
`;

export default StyledNavLink;
