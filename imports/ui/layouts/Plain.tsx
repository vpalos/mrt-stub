import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

const PlainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export default PlainLayout;
