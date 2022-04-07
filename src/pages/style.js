import styled from "styled-components";
import { Link } from "react-router-dom";
// Header Style
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  min-height: 97px;
  box-shadow: 10px 4px 29px 0px rgba(191, 191, 191, 0.25);
  font-family: Gilroy, "sans-serif";
  font-weight: 700;
  font-size: 24px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  width: 11%;
  justify-content: space-between;
  p {
    font-size: var(--text-3);
  }
  span {
    color: var(--button-color);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
// Main Page Style
export const MainContainer = styled.div`
  margin: 60px 0 60px 0;
  padding: 0 9rem;
`;

export const SecondaryPageContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const StyledCard = styled.div`
  padding: 39.92px 95.92px 39.92px 44.92px;
  box-sizing: border-box;
  border-radius: 10.8px;
  background: var(--card-gradient);
  border: 1.08px solid rgba(237, 237, 237, 0.49);
  box-shadow: var(--white-card-shadow);
  /* width: 1103px; */
  height: 350px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  padding: 40px 0;
  max-width: 507px;
  h1 {
    color: var(--h1-color);
  }
  p {
    color: var(--p-color);
    margin-bottom: 20px;
  }
`;
export const SecondaryTextContainer = styled(TextContainer)`
  padding: 20px 0;
  justify-content: space-around;
`;
export const LeftStyledCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  padding: 0 40px 20px;
  min-width: 560px;
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
