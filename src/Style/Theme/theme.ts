import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    accent: {
      red: string;
    };
  }

  interface ThemeOptions {
    accent?: {
      red?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#532482",
    },
  },
  accent: {
    red: "#FFB929",
  },
});

export default theme;
