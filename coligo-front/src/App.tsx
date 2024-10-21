import React, { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import requireAuth from "./components/requireAuth/requireAuth";
import { Box, CircularProgress, createTheme, Skeleton, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { error } from "console";

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
      },
      fontFamily: "Trebuchet MS"

    }
  });

  const [announcements, setAnnouncements] = useState([]);
  const [quizes, setQuizes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    Promise.all([
      fetch("http://localhost:8080/api/announcements"),
      fetch("http://localhost:8080/api/quizes"),
    ]).then(([resAnnouncements, resQuizes]) => 
      Promise.all([resAnnouncements.json(), resQuizes.json()])
    )
    .then(([announcements, quizes]) => {
      setAnnouncements(announcements);
      setQuizes(quizes);
      setLoading(false);
    });

  }, [])

  return (
    <ThemeProvider theme={theme}>
      {
        loading ? <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"}><CircularProgress /></Box>: 
        <Dashboard announcements={announcements} quizes={quizes}/>
      }
      {/* <Dashboard announcements={announcements} quizes={quizes}/> */}
    </ThemeProvider>
  );
}

export default requireAuth(App);
