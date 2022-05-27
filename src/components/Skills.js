/*import React from 'react'

const Skills = () => {
  return (
    <div>Skills</div>
  )
}

export default Skills
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

const Skills = () => {
  return (
    <div className="innercontainer">
    <div className="cardparent">
      <Header>
        <h1>Skills</h1>
        <img src={ProgressCircle} alt="" />
      </Header>
      <Card>
        <form action="">
          <SecondContainer>
            <TextField id="standard-basic" label="Skills (E.g. Design, React, MySQL)" variant="standard" />
          </SecondContainer>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default Skills;
