import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <button className="dashboard__btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
