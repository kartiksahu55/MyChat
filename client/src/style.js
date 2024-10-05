import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#202C33",
    },
    secondary: {
      main: "#111B21",
    },
    tertiary: {
      main: "#00A884",
    },
    white: {
      main: "#f3f3f3",
    },
  },
  shape: {
    borderRadius: 20,
    border: 1,
  },
});

export const heading3 = "text-[18px] font-semibold";
