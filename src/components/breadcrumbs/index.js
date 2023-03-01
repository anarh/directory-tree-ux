import React from "react";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  let location = useLocation();

  return (
    <small className="breadcrumbs">
      {location.pathname === '/' ? undefined : location.pathname.split('/').join(' ≻ ')}
    </small>
  );
  };

  export default BreadCrumbs;
