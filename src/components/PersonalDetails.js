// TODO: Link of website to format mobile number https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/

import React from "react";
import ProgressCircle from "../assets/progress-circle.svg";
import UserPhoto from "../assets/userPhoto.svg";
import TextField from '@mui/material/TextField';

import {
  Header,
  Card,
  FirstContainer,
  NameContainer,
  StyledInput,
  SecondContainer,
  SingleLineInput,
} from "../styles/DetailsStyle";

const PersonalDetails = () => {
  return (
    <div className="innercontainer">
    <div className="cardparent">
      <Header>
        <h1>Personal Details</h1>
        <img src={ProgressCircle} alt="" />
      </Header>
      <Card>
        <form action="">
          <FirstContainer>
            <div className="img-container">
              <img src={UserPhoto} alt="" />
            </div>
            <NameContainer>
              <TextField id="standard-basic" label="First Name" variant="standard" />
              <TextField id="standard-basic" label="Last Name" variant="standard" />
              <TextField id="standard-basic" label="Job Title" variant="standard" />
            </NameContainer>
          </FirstContainer>
          <br></br>
          <SecondContainer>
            <p>Contact Details</p>
            <TextField id="standard-basic" label="Phone Number" variant="standard" />
            <TextField id="standard-basic" label="Email Address" variant="standard" />
            <TextField id="standard-basic" label="Personal Website" variant="standard" type="url" pattern="https://.*"/>
            <br></br>
            <p>Location</p>
            <SingleLineInput>
              <TextField id="standard-basic" label="City" variant="standard" />
              <TextField id="standard-basic" label="Country" variant="standard" />
            </SingleLineInput>
          </SecondContainer>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default PersonalDetails;
