import React from "react";
import "./dashboard.css";
import SideBar from "../sidebar/SideBar";
import { Box, Grid2, Typography } from "@mui/material";
import ResponsiveAppBar from "../nav/Nav";
import ExamsCard from "../exams-card/ExamsCard";

const Dashboard = () => {
  return (
    <Grid2 container>
      {/* sidebar */}
      <Grid2>
        <SideBar />
      </Grid2>

      {/*  */}
      <Grid2 size='grow' sx={{color: 'red'}}>
        {/* nav */}
        <Grid2 >
          <ResponsiveAppBar/>
        </Grid2>

        {/* Exams time */}

        <Grid2>
        {/* announcements */}
          <Grid2 size='grow'>
            <ExamsCard/>
          </Grid2>
        {/* What's due */}
          <Grid2></Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
