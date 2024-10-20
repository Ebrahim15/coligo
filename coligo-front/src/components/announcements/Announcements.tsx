import { Avatar, Box, Button, Divider, Grid2, Typography } from "@mui/material";
import React from "react";

type announcementsProps = {
  announcements: {
    author: string,
    authorImage: string,
    createdAt: string,
    description: string,
    title: string,
    updatedAt: string,
    __v: number,
    _id: string,
  }[]
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
        <Grid2 container padding={3} spacing={1} key={announcement._id} flexWrap={{md:"wrap",lg:"nowrap"}}>
          <Grid2 container spacing={1} width={{sm: "auto", md:"25%"}} flexWrap={"nowrap"}>
            <Avatar alt={announcement.author} src={announcement.authorImage} />
            <Box>
              <Typography component={"p"}>{announcement.author}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {announcement.title}
              </Typography>
            </Box>
          </Grid2>
          <Divider orientation="vertical" flexItem sx={{display: {xs:"none", sm:"none", md:"none", lg:"flex"} }}/>
          <Divider orientation="horizontal" flexItem sx={{display: {md:"flex", lg:"none"}, width: "100%" }}/>
          <Grid2 width={{sm: "auto", md:"75%"}}>
            <Typography component={"div"} color="text.secondary">
              {announcement.description}
            </Typography>
          </Grid2>
        </Grid2>
      ))}
    </Box>
  );
};

export default Announcements;
