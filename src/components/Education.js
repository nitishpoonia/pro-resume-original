/*import React from "react";

const Education = () => {
  return <div>Education</div>;
};

export default Education;
*/
// TODO: Link of website to format mobile number https://uxmovement.com/forms/bad-practices-on-phone-number-form-fields/

import React from "react";
import ProgressCircle from "../assets/progress-circle.svg";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from "./ToggleButton";

import {
  Header,
  Card,
  FirstContainer,
  NameContainer,
  StyledInput,
  SecondContainer,
  SingleLineInput,
} from "../styles/DetailsStyle";

const Education = () => {
  const [year, setYear] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleClick = (event) => {
    setOpen(true);
  };

  const AddEducation = () => {
    return (
      <form action="">
          <SecondContainer>
            <TextField id="standard-basic" label="University/School" variant="standard" />
            <TextField id="standard-basic" label="Degree" variant="standard" />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="simple-select-standard-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={year}
                onChange={handleChange}
                label="Year"
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>2012</MenuItem>
              <MenuItem value={20}>2013</MenuItem>
              <MenuItem value={30}>2014</MenuItem>
              <MenuItem value={40}>2015</MenuItem>
              <MenuItem value={50}>2016</MenuItem>
              <MenuItem value={60}>2017</MenuItem>
              <MenuItem value={70}>2018</MenuItem>
              <MenuItem value={80}>2019</MenuItem>
              <MenuItem value={90}>2020</MenuItem>
              <MenuItem value={100}>2021</MenuItem>
              </Select>
            </FormControl>
            <TextField id="standard-basic" label="Field of Study" variant="standard" />
            <TextField id="standard-basic" label="Accomplishments" variant="standard" />
          </SecondContainer>
        </form>
    )
  }  
  return (
    <div className="innercontainer">
    <div className="cardparent">
      <Header>
        <h1>Education</h1>
        <img src={ProgressCircle} alt="" />
      </Header>
      <br></br>
      <ToggleButton
        onClick={handleClick}
        text="Add Education"
      />

      <Card>
        {
          open ? <AddEducation/> : "No Education Available"
        }
      </Card>
    </div>
    </div>
  );
};

export default Education;
