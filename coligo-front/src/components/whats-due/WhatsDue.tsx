import { HourglassBottom } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import React from "react";

const WhatsDue = () => {
  return (
    <Box
      color={"text.primary"}
      flexGrow={1}
      padding={3}
      bgcolor={"background.paper"}
      boxShadow={1}
      borderRadius={1}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          What's due
        </Typography>
        <Button variant="text" sx={{ color: "themeColor.light" }}>
          All
        </Button>
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={3} paddingBlock={3}>
        <Box>
            <Chip
            icon={<HourglassBottom color="secondary" fontSize="medium"  sx={{ marginLeft: 0 }}/>}
            label="Unit 2 quiz"
            variant="outlined"
            sx={{ border: "none", width: "fit-content", fontWeight: "bold", padding: 0, margin: 0 }}
            />
            <Typography>Course: Physics 02</Typography>
            <Typography>Topic: Physics 02</Typography>
            <Typography>Due to: Physics 02</Typography>
        </Box>
        <Box>
            <Button
            variant="outlined"
            color="secondary"
            sx={{ fontWeight: "bold", width: '100%'
             }}
            >
            Start Quiz
            </Button>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default WhatsDue;
