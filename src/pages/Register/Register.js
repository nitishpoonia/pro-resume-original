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
} from "./RegisterStyle";
import { Link } from "react-router-dom";

const Register = () => {
  const googleIcon = (
    <Icon>
      <img src={googleicon} alt="Google Logo" />
    </Icon>
  );

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signUp, currentUser } = useAuth();
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmailValue(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    console.log(emailRef.current.value);
    try {
      setError(""); //Set error to empty before trying again
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
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
            <img src={RegisterImg} alt="" />
          </Grid>
        </LeftContainer>
        <RightContainer>
          <UpperTextContainer>
            <LogoContainer>
              <img src={proLogo} alt="Pro Resume Logo" />
              <Typography variant="h3">
                Pro<span>Resume</span>
              </Typography>
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
                    ref={emailRef}
                    value={emailValue}
                    onChange={handleEmailChange}
                  />
                  <StyledTextField
                    id="outlined-password-input"
                    label="Password"
                    type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                    // onChange={someChangeHandler}
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
                    ref={passwordRef}
                    autoComplete="current-password"
                    margin="normal"
                  />
                  <StyledTextField
                    id="outlined-password-input"
                    label="Confirm Password"
                    autoComplete="current-password"
                    margin="normal"
                    ref={passwordConfirmRef}
                    type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                    // onChange={someChangeHandler}
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
                  color: "white",
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
            </SecondButtonContainer>
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
