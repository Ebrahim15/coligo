import React, { useState } from "react";
import "./dashboard.css";
import SideBar from "../sidebar/SideBar";
import { Box, Grid2, Typography } from "@mui/material";
import ResponsiveAppBar from "../nav/Nav";
import ExamsCard from "../exams-card/ExamsCard";
import Announcements from "../announcements/Announcements";
import WhatsDue from "../whats-due/WhatsDue";

declare module "@mui/material/styles" {
  interface Palette {
    themeColor: Palette["primary"];
    bgColor: Palette["background"];
  }

  interface PaletteOptions {
    themeColor?: PaletteOptions["primary"];
    bgColor?: PaletteOptions["background"];
  }
}

type dashboardProps = {
  // announcements: any;
  // quizes: any;
  announcements: {
    author: string,
    authorImage: string,
    createdAt: string,
    description: string,
    title: string,
    updatedAt: string,
    __v: number,
    _id: string,
  }[],
  quizes: {
    course: string;
    createdAt: string;
    dueDate: string;
    taskType: string;
    title: string;
    topic: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }[];
};

const Dashboard = ({ announcements, quizes }: dashboardProps) => {
  return (
    <Grid2 container>
      {/* sidebar */}
      <Grid2 width={{ xs: 0, sm: "auto" }}>
        <SideBar />
      </Grid2>

      {/* dashboard page */}
      <Grid2 size="grow">
        {/* nav */}
        <Grid2>
          <ResponsiveAppBar />
        </Grid2>

        <Box
          padding={5}
          bgcolor={"background.default"}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
        >
          {/* Exams time */}
          <Grid2 size="grow">
            <ExamsCard />
          </Grid2>

          <Grid2
            container
            gap={3}
            sx={{ flexDirection: { xs: "column", sm: "column", md: "column", lg:"row" } }}
          >
            {/* announcements */}
            <Grid2 size="grow">
              <Announcements announcements={announcements} />
            </Grid2>
            {/* What's due */}
            <Grid2 size="auto">
              <WhatsDue quizes={quizes}/>
            </Grid2>
          </Grid2>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
