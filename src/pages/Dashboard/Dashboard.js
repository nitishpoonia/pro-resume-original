import React from "react";
import Basic from "../../components/Left/Basic";
import Right from "../../components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "../../context/ResumeContext";
import { Link, Outlet } from "react-router-dom";
import myClasses from "../../components/Left/Left.module.css";
import ProResume from "../../assets/ProResume.png";
import thumbn from "../../assets/templateA.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53 ",
      minWidth: 100,
      marginLeft: 30,
    },
  });

  const classes = useStyles();

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <Link to="/" style={{ textAlign: "left" }}>
          <img src={ProResume} alt="Pro Resume logo" className={myClasses.img2} />
        </Link>
      </div>
      <hr className={myClasses.hr2} />
      <h2 className={myClasses.templatesH2}>Templates</h2>
      <div className={myClasses.cards}>
        <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/dashboard/basic/header"
          >
            The Basic
          </Button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <ResumeContextProvider>
          <Outlet />
        <Right />
      </ResumeContextProvider>
    </div>
  );
}

export default App;
