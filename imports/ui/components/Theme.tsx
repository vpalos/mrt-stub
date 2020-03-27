import * as React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1565c0"
    },
    secondary: {
      main: "#d32f2f"
    }
  }
});

const Theme: React.FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
