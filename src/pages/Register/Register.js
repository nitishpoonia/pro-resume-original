import React, { useEffect, useState, useRef } from "react";

import { useAuth } from "../../context/AuthContext";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Icon, Grid, Alert } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Images and Styles
import googleicon from "../../assets/googleicon.svg";
import { IOSSwitch, theme } from "../../components/GlobalStyles/ControlStyles";
import RegisterImg from "../../assets/RegisterImg.png";
import ProResume from "../../assets/ProResume.png";
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
} from "./RegisterStyle";
import { Link } from "react-router-dom";

const Register = () => {
  const googleIcon = (
    <Icon>
      <img src={googleicon} alt="Google Logo" />
    </Icon>
  );

  const { signUp } = useAuth();

  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError(""); //Set error to empty before trying again
      setLoading(true);
      await signUp(emailValue, password);
    } catch {
      setError("Failed To Create and Account");
    }

    setLoading(false);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <LeftContainer>
          <Grid item>
            <img className="registerImg" src={RegisterImg} alt="" />
          </Grid>
        </LeftContainer>
        <RightContainer>
          <UpperTextContainer>
            <LogoContainer>
              <img src={ProResume} alt="Pro Resume Logo" />
            </LogoContainer>

            <CreateNewAccount>
              <Typography>Create New Account</Typography>
              {error && (
                <Alert severity="error" variant="filled">
                  {error}
                </Alert>
              )}
            </CreateNewAccount>

            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <StyledTextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    margin="normal"
                    value={emailValue}
                    onChange={handleEmailChange}
                  />
                  <StyledTextField
                    id="outlined-password-input"
                    label="Password"
                    type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                    onChange={handlePasswordChange}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    autoComplete="current-password"
                    margin="normal"
                  />
                  <StyledTextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    autoComplete="current-password"
                    margin="normal"
                    type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                    onChange={handleConfPasswordChange}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
                      padding: "10px 0px",
                    }}
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    type="submit"
                  >
                    Sign Up
                  </MainButton>
                </div>
              </form>
            </div>

            <hr />
            <SecondButtonContainer>
              <SecondButton
                sx={{
                  background: "black",
                  padding: "10px 0px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0 20px 0",
                  lineHeight: "0",
                }}
                variant="contained"
                startIcon={googleIcon}
                color="neutral"
                disabled={loading}
              >
                Or sign up with Google
              </SecondButton>
              <p>
              Already Have an account? <Link to="/login">Sign in now</Link>{" "}
              </p>
            </SecondButtonContainer>
            {/* <SecondButtonContainer>
              <SecondButton
                sx={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0 20px 0",
                }}
                variant="contained"
                startIcon={googleIcon}
                color="neutral"
                disabled={loading}
              >
                Or sign up with Google
              </SecondButton>
              <Typography>
                Already Have an account? <Link to="/login">Sign in now</Link>{" "}
              </Typography>
            </SecondButtonContainer> */}
          </UpperTextContainer>

          <div>
            <Typography>
              &copy; Pro Resume {new Date().getFullYear()}
            </Typography>
          </div>
        </RightContainer>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Register;
