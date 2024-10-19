import { Avatar, Box, Button, Divider, Grid2, Typography } from "@mui/material";
import React from "react";

type announcementsProps = {
  announcements: any;
};

const Announcements = ({ announcements }: announcementsProps) => {
  return (
    <Box
      padding={3}
      bgcolor={"white"}
      color={"text.primary"}
      boxShadow={1}
      borderRadius={1}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          Announcements
        </Typography>
        <Button variant="text" sx={{ color: "themeColor.light" }}>
          All
        </Button>
      </Box>

      {announcements.map((announcement: any) => (
        <Grid2 container padding={3} spacing={1} key={announcement._id}>
          <Grid2 container spacing={1}>
            <Avatar alt={announcement.author} src={announcement.authorImage} />
            <Box>
              <Typography component={"p"}>{announcement.author}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Math 101
              </Typography>
            </Box>
            <Divider orientation="vertical" />
          </Grid2>
          <Grid2>
            <Typography component={"p"} color="text.secondary">
              {announcement.description}
            </Typography>
          </Grid2>
        </Grid2>
      ))}
    </Box>
  );
};

export default Announcements;
