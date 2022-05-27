import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { DetailsMainContainer } from "../styles/DetailsStyle";
const Details = () => {
  return (
    <DetailsMainContainer>
      <Sidebar />
      <Outlet />
    </DetailsMainContainer>
  );
};

export default Details;
