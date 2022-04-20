import styled from "styled-components";
import { TextField, Button } from "@mui/material";
export const StyledContainer = styled.div`
  display: flex;
`;
export const LeftContainer = styled.div`
  @media screen and (max-width: 768px) {
    .registerImg{
      display: none;
    }
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 5rem 1rem 5rem 2rem;
  flex-grow: 2;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  img {
    margin-right: 20px;
  }
  h1 {
    span {
      color: var(--primary-color);
    }
  }
`;
export const UpperTextContainer = styled.div``;

export const CreateNewAccount = styled.div`
  p {
    font-size: 1.4rem;
    margin-bottom: 30px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  border: none;
`;

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const MainButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`;

export const SecondButton = styled(MainButton)``;

export const SecondButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
