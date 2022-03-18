import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

import { FormControlLabel, Icon, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// Images and Styles
import googleicon from "../../assets/googleicon.svg";
import { IOSSwitch, theme } from "../../components/GlobalStyles/ControlStyles";
import RegisterImg from "../../assets/RegisterImg.svg";
import proLogo from "../../assets/proLogo.svg";
import {
  LeftContainer,
  RightContainer,
  StyledContainer,
  UpperTextContainer,
  LogoContainer,
  CreateNewAccount,
  StyledTextField,
  ForgotPassword,
  MainButton,
  SecondButton,
  SecondButtonContainer,
} from "../Register/RegisterStyle";

const Register = () => {
  const googleIcon = (
    <Icon>
      <img src={googleicon} alt="Google Logo" />
    </Icon>
  );
  
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <LeftContainer>
          <Grid item>
            <img src={RegisterImg} alt="" />
          </Grid>
        </LeftContainer>
        <RightContainer>
          <UpperTextContainer>
            <LogoContainer>
              <img src={proLogo} alt="Pro Resume Logo" />
              <Typography varaint="h1">
                Pro<span>Resume</span>
              </Typography>
            </LogoContainer>

            <CreateNewAccount>
              <Typography>Nice to see you again</Typography>
            </CreateNewAccount>

            <div>
              <form action="">
                <div>
                  <StyledTextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    helperText="Email or Phone Number"
                    margin="normal"

                  />
                  <StyledTextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
   
                  />
                </div>

                <ForgotPassword>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked={false} />}
                    label="Remember Me"
                  />
                  <Link to="/reset">Forgot your password?</Link>
                </ForgotPassword>

                <div>
                  <MainButton
                    sx={{
                      color: "white",
                      marginBottom: "20px",
                    }}
                    variant="contained"
                    color="primary"
                    
                  >
                    Sign In
                  </MainButton>
                </div>
              </form>
            </div>

            <hr />
            <SecondButtonContainer>
              <SecondButton
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0 20px 0",
                }}
                variant="contained"
                startIcon={googleIcon}
                color="neutral"
              >
                Or sign in with Google
              </SecondButton>
              <p>
                Don't have an Account? <Link to="/register">Sign up now</Link>{" "}
              </p>
            </SecondButtonContainer>
          </UpperTextContainer>

          <div>
            <Typography>&copy; Pro Resume {new Date().getFullYear()}</Typography>
          </div>
        </RightContainer>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Register;
