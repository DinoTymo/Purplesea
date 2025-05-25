import React from "react";
import { Outlet } from "react-router-dom";

function MainPane() {
  return (
    <div className="main-pane mx-4 border border-dark-subtle">
      <Outlet />
    </div>
  );
}

export default MainPane;
