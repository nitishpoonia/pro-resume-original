import styled from "styled-components";
import { MainContainer } from "../pages/style";
import { Link } from "react-router-dom";
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsMainContainer = styled(MainContainer)`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  ul {
    height: 274px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    li {
      list-style: disc;
      color: var(--p-color);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--p-color);
`;

export const Card = styled.div`
  box-shadow: var(--white-card-shadow);
  color: black;
  border-radius: 10.8px;
  padding: 30px 50px 50px;
  margin-top: 40px;
  width: 100%;
`;

export const FirstContainer = styled.div`
  display: flex;
  img {
    margin-right: 20px;
  }
`;

export const SecondContainer = styled(FirstContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  gap: 0.5 rem;
`;

export const StyledInput = styled.input`
  width: 264px;
  border: none;
  border-bottom: 0.5px solid var(--p-color);
  height: 23px;
  background: none;
  margin-bottom: 40px;
  &::placeholder {
    /* font-size: var(--text-1); */
  }
`;

export const SingleLineInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
