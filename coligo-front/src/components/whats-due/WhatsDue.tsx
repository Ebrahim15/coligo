import { Assignment, HourglassBottom } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import React from "react";

type quizesProps = {
  quizes: {
    course: string,
    createdAt: string,
    dueDate: string,
    taskType: string;
    title: string;
    topic: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }[]
}

const WhatsDue = ({quizes}:quizesProps) => {
  return (
    <Box
      color={"text.primary"}
      // flexGrow={1}
      padding={3}
      bgcolor={"background.paper"}
      boxShadow={1}
      borderRadius={1}
      width={"fit-content"}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          What's due
        </Typography>
        <Button variant="text" sx={{ color: "themeColor.light" }}>
          All
        </Button>
      </Box>

      {
        quizes?.map((quiz: any) => (
          <Box key={quiz._id} display={"flex"} flexDirection={"column"} gap={3} paddingBlock={3}>
          <Box>
              <Chip
              icon={quiz.taskType.toLowerCase() === 'quiz' ? <HourglassBottom color="secondary" fontSize="medium"  sx={{ marginLeft: 0 }}/> : <Assignment color="secondary" fontSize="medium"  sx={{ marginLeft: 0 }}/>}
              label={quiz.title}
              variant="outlined"
              sx={{ border: "none", width: "fit-content", fontWeight: "bold", padding: 0, margin: 0 }}
              />
              <Typography>Course: {quiz.course}</Typography>
              <Typography>Topic: {quiz.topic}</Typography>
              <Typography>Due to: {quiz.dueDate}</Typography>
          </Box>
          <Box>
              <Button
              variant="outlined"
              color="secondary"
              sx={{ fontWeight: "bold", width: '100%'
               }}
              >
              Start {quiz.taskType.charAt(0).toUpperCase() + quiz.taskType.slice(1).toLowerCase()}
              </Button>
          </Box>
          <Divider />
        </Box>
        ))
      }
    </Box>
  );
};

export default WhatsDue;