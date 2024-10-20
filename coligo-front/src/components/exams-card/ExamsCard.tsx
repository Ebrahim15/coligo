import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import workspace from "../../images/workspace.png";
import { Button, createTheme, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

declare module "@mui/material/styles" {
  interface Palette {
    themeColor: Palette["primary"];
  }

  interface PaletteOptions {
    themeColor?: PaletteOptions["primary"];
  }
}

export default function ExamsCard() {
  const theme = createTheme({
    palette: {
      themeColor: {
        main: "#284E6D",
        light: "#4DCCC5",
      },
      text: {
        primary: "#000",
        secondary: "#D6DCDA",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ 
          display: "flex", 
          // height: 250, 
          // padding: 3, 
          boxShadow: 1 
        }}
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            alignItems: "start",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
              padding: 3
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                width: "fit-content",
                // color: "themeColor.main",
                background: 'linear-gradient(to right, #284E6D, #4DCCC5)',
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                fontWeight: "bold"
              }}
            >
              Exams time
            </Typography>
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Here we are, Are you ready to fight? Don't worry, we prepared
                some tips to be ready for your exams.
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                "Nothing happens until something moves"-Albert Einstein
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "themeColor.light", width: "fit-content" }}
            >
              View exams tips
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 400, height: {md: 250, sm:'100%', xs:'100%'} }}
          image={workspace}
          alt="Live from space album cover"
        />
      </Card>
    </ThemeProvider>
  );
}
