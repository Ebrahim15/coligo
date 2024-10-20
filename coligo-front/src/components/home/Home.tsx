import React from "react";
import "./home.css";
import { Box, Button, createTheme, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


type homeProps = {
  setLoggedIn: Function;
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#284E6D",
    },
    secondary: {
      main: "#4DCCC5",
    },
    themeColor: {
      main: "#284E6D",
      light: "#4DCCC5",
    },
    text: {
      primary: "#717876",
      secondary: "#D6DCDA",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const Home = ({ setLoggedIn }: homeProps) => {
  const handleLoginOnClick = () => {
    setLoggedIn(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          // backgroundColor: "themeColor.light",
          background: "linear-gradient(to bottom, #284E6D, #4DCCC5)",
        }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <Typography component={"div"} textTransform={"uppercase"} color="white" sx={{typography: {xs:"h4", sm:"h3", md:"h2", lg: "h1"}}}>Welcome to Coligo</Typography>
        
        <Button variant="contained" onClick={handleLoginOnClick}>
          Log in
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
