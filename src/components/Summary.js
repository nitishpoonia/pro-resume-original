/*import React from 'react'

const Summary = () => {
  return (
    <div>Summary</div>
  )
}

export default Summary
*/
import React from "react";
import ProgressCircle from "../assets/progress-circle.svg";
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

const Summary = () => {
  return (
    <div className="innercontainer">
    <div className="cardparent">
      <Header>
        <h1>Summary</h1>
        <img src={ProgressCircle} alt="" />
      </Header>
      <Card>
        <form action="">
          <SecondContainer>
            <TextField id="standard-basic" label="Your Professional Summary" variant="standard" />
          </SecondContainer>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default Summary;
