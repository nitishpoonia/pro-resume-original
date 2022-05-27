/*import React from "react";

const Certificates = () => {
  return <div>Certificates</div>;
};

export default Certificates;
*/
import React from "react";
import ProgressCircle from "../assets/progress-circle.svg";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {
  Header,
  Card,
  FirstContainer,
  NameContainer,
  StyledInput,
  SecondContainer,
  SingleLineInput,
} from "../styles/DetailsStyle";

const Certificates = () => {
  const [month, setMonth] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <div className="innercontainer">
    <div className="cardparent">
      <Header>
        <h1>Certificates</h1>
        <img src={ProgressCircle} alt="" />
      </Header>
      <Card>
        <form action="">
          <SecondContainer>
            <TextField id="standard-basic" label="Certification Name" variant="standard" />
            
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="simple-select-standard-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={month}
                onChange={handleChange}
                label="Month"
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>January</MenuItem>
              <MenuItem value={20}>February</MenuItem>
              <MenuItem value={30}>March</MenuItem>
              <MenuItem value={40}>April</MenuItem>
              <MenuItem value={50}>May</MenuItem>
              <MenuItem value={60}>June</MenuItem>
              <MenuItem value={70}>July</MenuItem>
              <MenuItem value={80}>August</MenuItem>
              <MenuItem value={90}>September</MenuItem>
              <MenuItem value={100}>October</MenuItem>
              <MenuItem value={110}>November</MenuItem>
              <MenuItem value={120}>December</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard">
              <InputLabel id="simple-select-standard-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={month}
                onChange={handleChange}
                label="Year"
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="simple-select-standard-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={month}
                onChange={handleChange}
                label="Month"
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>January</MenuItem>
              <MenuItem value={20}>February</MenuItem>
              <MenuItem value={30}>March</MenuItem>
              <MenuItem value={40}>April</MenuItem>
              <MenuItem value={50}>May</MenuItem>
              <MenuItem value={60}>June</MenuItem>
              <MenuItem value={70}>July</MenuItem>
              <MenuItem value={80}>August</MenuItem>
              <MenuItem value={90}>September</MenuItem>
              <MenuItem value={100}>October</MenuItem>
              <MenuItem value={110}>November</MenuItem>
              <MenuItem value={120}>December</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard">
              <InputLabel id="simple-select-standard-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={month}
                onChange={handleChange}
                label="Year"
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              </Select>
            </FormControl>
            
            <TextField id="standard-basic" label="Accomplishments" variant="standard" />
          </SecondContainer>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default Certificates;
