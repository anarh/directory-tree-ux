import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
      <React.Fragment>
        <Outlet />
      </React.Fragment>
    );
  };

  export default Index;