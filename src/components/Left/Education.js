import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../context/ResumeContext";

function Education() {
  const { content, updateEducationData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateEducationData(data);
    setBtnText("Update");
  };

  const commonStyle = { marginTop: 12, marginLeft: 8, marginRight: 8 }
  return (
    <div className="">
      <h2>Education</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Institution"
          name="institution"
          variant="outlined"
          defaultValue={content.education.institution || ""}
          {...register('institution')}

          style={commonStyle}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="city"
          variant="outlined"
          defaultValue={content.education.city || ""}
          {...register('city')}
          style={commonStyle}
        />

        <TextField
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
          defaultValue={content.education.major || ""}
          {...register('major')}
          style={commonStyle}
        />

        <TextField
          id="outlined-basic"
          label="Graduation Year"
          name="gradYear"
          variant="outlined"
          defaultValue={content.education.gradYear || ""}
          {...register('gradYear')}
          style={commonStyle}
        />

        <TextField
          id="outlined-basic"
          label="Additional Info"
          name="additional"
          variant="outlined"
          defaultValue={content.education.additional || ""}
          {...register('additional')}
          style={commonStyle}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={commonStyle}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default Education;
