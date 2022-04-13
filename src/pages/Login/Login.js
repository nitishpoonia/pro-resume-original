import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { FormControlLabel, Icon, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { InputAdornment, IconButton } from "@mui/material";
// Images and Styles
import googleicon from "../../assets/googleicon.svg";
import { IOSSwitch, theme } from "../../components/GlobalStyles/ControlStyles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import RegisterImg from "../../assets/RegisterImg.svg";
import proLogo from "../../assets/proLogo.svg";
import { useAuth } from "../../context/AuthContext";
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

const Login = (props) => {
  
  const { signIn, currentUser } = useAuth();
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      setError(""); //Set error to empty before trying again
      setLoading(true);
      await signIn(emailValue, password);
    } catch {
      setError("Failed To Create and Account");
      setLoading(false);
    }

  }


  useEffect(() => {
    if(currentUser){
      setLoading(false);
      navigate('/dashboard');
    }
  }, [currentUser])

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
              <form onSubmit={handleSubmit} action="">
                <div>
                  <StyledTextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    helperText="Email or Phone Number"
                    value={emailValue}
                    onChange={handleEmailChange}
                    margin="normal"
                  />
                  <StyledTextField
                    id="outlined-password-input"
                    label="Password"
                    type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                    onChange={handlePasswordChange}
                    autoComplete="current-password"
                    margin="normal"
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
                    Sign In
                  </MainButton>
                </div>
              </form>
            </div>

            <hr />
            <SecondButtonContainer>
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
                Or sign in with Google
              </SecondButton>
              <p>
                Don't have an Account? <Link to="/register">Sign up now</Link>{" "}
              </p>
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

export default Login;
