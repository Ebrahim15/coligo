import * as React from "react";
import "./sidebar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  CalendarMonth,
  Campaign,
  Home,
  LibraryBooks,
  School,
  TrendingUp,
} from "@mui/icons-material";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { blue, pink } from "@mui/material/colors";

const SideBar = () => {
  const drawerWidth = 270;
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#18597F',
            color: 'white',
          }
        }
      }
    },
  });
  const siderbar = [
    {
      title: "Dashboard",
      icon: <Home />,
    },
    {
      title: "Schedule",
      icon: <CalendarMonth />,
    },
    {
      title: "Courses",
      icon: <LibraryBooks />,
    },
    {
      title: "Gradebook",
      icon: <School />,
    },
    {
      title: "Performance",
      icon: <TrendingUp />,
    },
    {
      title: "Announcement",
      icon: <Campaign />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h3">Coligo</Typography>
        <Box sx={{ width: "100%" }} role="presentation">
          <List>
            {siderbar.map((item, index) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton className="listItemButton" sx={{":hover": {backgroundColor: "white", color:"themeColor.primary"}}} onClick={() => console.log(item.title)}>
                  <ListItemIcon sx={{color: 'white'}}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default SideBar;
