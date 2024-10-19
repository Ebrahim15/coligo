import React from "react";
import "./dashboard.css";
import SideBar from "../sidebar/SideBar";
import { Box, createTheme, Grid2, Typography } from "@mui/material";
import ResponsiveAppBar from "../nav/Nav";
import ExamsCard from "../exams-card/ExamsCard";
import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";
import Announcements from "../announcements/Announcements";
import WhatsDue from "../whats-due/WhatsDue";

declare module "@mui/material/styles" {
  interface Palette {
    themeColor: Palette["primary"];
    bgColor: Palette["background"]
  }

  interface PaletteOptions {
    themeColor?: PaletteOptions["primary"];
    bgColor?: PaletteOptions["background"]
  }
}


const Dashboard = () => {
  return (
      <Grid2 container>
        {/* sidebar */}
        <Grid2>
          <SideBar />
        </Grid2>

        {/* dashboard page */}
        <Grid2 size="grow">
          {/* nav */}
          <Grid2>
            <ResponsiveAppBar />
          </Grid2>

          <Box padding={5} bgcolor={"background.default"} display={'flex'} flexDirection={'column'} gap={3}>
          {/* Exams time */}
            <Grid2 size="grow">
                <ExamsCard />
            </Grid2>

            <Grid2 container gap={3}>
              {/* announcements */}
              <Grid2 flexGrow={2}>
                <Announcements />
              </Grid2>
              {/* What's due */}
              <Grid2 flexGrow={1}>
                <WhatsDue/>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
  );
};

export default Dashboard;
