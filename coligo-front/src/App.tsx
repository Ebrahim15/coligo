import React, { useState } from "react";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import requireAuth from "./components/requireAuth/requireAuth";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    palette: {
      primary:{
        main: '#284E6D',
      },
      secondary: {
        main: "#4DCCC5"
      },
      themeColor: {
        main: "#284E6D",
        light: "#4DCCC5",
      },
      text: {
        primary: "#717876",
        secondary: "#D6DCDA",
      },
      background: {
        default: "#F0F4F7",
        paper: "#fff"
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            backgroundColor: "#000",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#fff",
          },
        },
      },
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />;
    </ThemeProvider>
  );
}

export default requireAuth(App);
