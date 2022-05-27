import React from "react";
import plusCircle from "../assets/plus-circle.svg";
import pencil from "../assets/pencil.svg";
import duplicate from "../assets/duplicate.svg";
import trash from "../assets/trash.svg";
import download from "../assets/download.svg";

import { Link } from "react-router-dom";

// Styles
import { MainContainer } from "./style";
import {
  StyledCreateResume,
  CreateNew,
  MyResume,
  EditResume,
  EditResumeOptions,
  Option,
  DownloadResume,
} from "../styles/CreateResumeStyle";
function CreateResume() {
  return (
    <MainContainer>
      <StyledCreateResume>
        <h1>Create Resume</h1>
        <Link to="/details/personalDetails">
          <CreateNew>
            <img src={plusCircle} alt="" />
            <p>Create New</p>
          </CreateNew>
        </Link>
      </StyledCreateResume>
      <MyResume>
        <h1>My Resume</h1>
        <EditResume>
          <CreateNew></CreateNew>
          <EditResumeOptions>
            <div className="resumeTitle">
              <h4>Untitled Resume</h4>
            </div>
            <div className="options">
              <Option>
                <img src={pencil} alt="" />
                <p>Edit</p>
              </Option>
              <Option>
                <img src={duplicate} alt="" />
                <p>Duplicate</p>
              </Option>
              <Option>
                <img src={trash} alt="" />
                <p>Delete</p>
              </Option>
            </div>
            <DownloadResume>
              <img src={download} alt="" />
              <p>Downlaod</p>
            </DownloadResume>
          </EditResumeOptions>
        </EditResume>
      </MyResume>
    </MainContainer>
  );
}

export default CreateResume;
