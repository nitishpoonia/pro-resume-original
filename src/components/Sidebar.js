import React from "react";
import { Nav, StyledLink } from "../styles/DetailsStyle";
const Sidebar = () => {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <StyledLink to="personalDetails">Personal Details</StyledLink>
          </li>
          <li>
            <StyledLink to="exp">Experience</StyledLink>
          </li>
          <li>
            <StyledLink to="edu">Education</StyledLink>
          </li>
          <li>
            <StyledLink to="skills">Skills</StyledLink>
          </li>
          <li>
            <StyledLink to="lang">Languages</StyledLink>
          </li>
          <li>
            <StyledLink to="certificates">Certificates</StyledLink>
          </li>
          <li>
            <StyledLink to="summary">Summary</StyledLink>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default Sidebar;
