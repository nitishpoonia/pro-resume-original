import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { ResumeContext } from "../../context/ResumeContext";

function ResumeHeader() {
  const { content, updateHeaderData, removeFakeData } = useContext(
    ResumeContext
  );

  const handleChange = (event) => {
    const data = {
      ...content.header,
      [event.target.name]: event.target.value
    }
    
    removeFakeData();
    updateHeaderData(data);
  };

  return (
    <div className="">
      <h2>Header</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          value={content.header.name || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          value={content.header.address || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City"
          name="city"
          variant="outlined"
          value={content.header.city || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="State"
          name="state"
          variant="outlined"
          value={content.header.state || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Zip Code"
          name="zip"
          variant="outlined"
          value={content.header.zip || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          value={content.header.phone || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          value={content.header.email || ""}
          onChange={handleChange}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Summary"
          name="summary"
          multiline
          rows={7}
          variant="outlined"
          value={content.header.summary || ""}
          onChange={handleChange}
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
        {/* <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Update
        </Button> */}
      </form>
    </div>
  );
}

export default ResumeHeader;
