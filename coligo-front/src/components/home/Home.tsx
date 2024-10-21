import React from "react";
import "./home.css";
import { Box, Button, createTheme, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import coligoBG from "../../images/coligoBG.png";

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
    fontFamily: "Trebuchet MS"
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
          background: `url(${coligoBG}), linear-gradient(to bottom, #284E6D, #4DCCC5)`,
          backgroundSize: 300,
        }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <Box
          sx={{
            borderRadius: "3rem",
            backgroundColor: "rgba(255, 255, 255, 0.171)",
            padding: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5
          }}
        >
          <Typography
            component={"div"}
            // textTransform={"uppercase"}
            color="white"
            sx={{ typography: { xs: "h4", sm: "h3", md: "h2", lg: "h1" }, textShadow: "1px 1px 2px #000"}}
          >
            Welcome to Coligo
          </Typography>

          <Button
            variant="contained"
            onClick={handleLoginOnClick}
            sx={{
              backgroundColor: "themeColor.main",
              boxShadow: "none",
              borderRadius: "3rem",
              paddingInline: "2rem",
              border: "none",
              fontSize: "large",
              width: "fit-content"
            }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
