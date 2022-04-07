import React from "react";
import Logo from "../assets/Logo.svg";
import { StyledNav, Brand, MenuContainer } from "../style";
import user from "../assets/user.svg";
import DownArrow from "../assets/down arrow.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <StyledNav>
      <Link to="/">
        <Brand>
          <img src={Logo} alt="Pro CV logo" />
          <p>
            Pro<span>CV</span>
          </p>
        </Brand>
      </Link>

      <MenuContainer>
        <img src={user} alt="" />
        <img src={DownArrow} alt="" />
      </MenuContainer>
    </StyledNav>
  );
};
export default Header;
