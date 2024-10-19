import { Avatar, Box, Button, Divider, Grid2, Typography } from "@mui/material";
import React from "react";

const Announcements = () => {
  return (
    <Box padding={3} bgcolor={"white"} color={"text.primary"} boxShadow={1} borderRadius={1}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6" fontWeight={"bold"}>Announcements</Typography>
        <Button variant="text" sx={{color: "themeColor.light"}}>All</Button>
      </Box>
      <Grid2 container padding={3} spacing={1}>
        <Grid2 container spacing={1}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Box>
                <Typography component={'p'}>Mr. Ahmed Mostafa</Typography>
                <Typography variant="subtitle2" color="text.secondary">Math 101</Typography>
            </Box>
            <Divider orientation="vertical"/>
        </Grid2>
        <Grid2><Typography component={'p'} color="text.secondary">ssdsdsdsdsdsdsd s sdsdsds sdsdsdsd sdsdsd</Typography></Grid2>
      </Grid2>
    </Box>
  );
};

export default Announcements;
