// import * as React from "react";
// import "./sidebar.css";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import {
//   CalendarMonth,
//   Campaign,
//   Home,
//   LibraryBooks,
//   School,
//   TrendingUp,
// } from "@mui/icons-material";
// import { createTheme, ThemeProvider, Typography } from "@mui/material";
// import { blue, pink } from "@mui/material/colors";

// const SideBar = () => {
//   const drawerWidth = 270;
//   const theme = createTheme({
//     components: {
//       MuiDrawer: {
//         styleOverrides: {
//           paper: {
//             backgroundColor: '#18597F',
//             color: 'white',
//           }
//         }
//       }
//     },
//   });
//   const siderbar = [
//     {
//       title: "Dashboard",
//       icon: <Home />,
//     },
//     {
//       title: "Schedule",
//       icon: <CalendarMonth />,
//     },
//     {
//       title: "Courses",
//       icon: <LibraryBooks />,
//     },
//     {
//       title: "Gradebook",
//       icon: <School />,
//     },
//     {
//       title: "Performance",
//       icon: <TrendingUp />,
//     },
//     {
//       title: "Announcement",
//       icon: <Campaign />,
//     },
//   ];

//   return (
//     <ThemeProvider theme={theme}>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//           display:{xs: 'none', sm: "none", md:"none", lg: "block"}
//         }}
//         // variant="permanent"
//         variant="temporary"
//         anchor="left"
//       >
//         <Typography variant="h3">Coligo</Typography>
//         <Box sx={{ width: "100%" }} role="presentation">
//           <List>
//             {siderbar.map((item, index) => (
//               <ListItem key={item.title} disablePadding>
//                 <ListItemButton className="listItemButton" sx={{":hover": {backgroundColor: "white", color:"themeColor.primary"}}} onClick={() => console.log(item.title)}>
//                   <ListItemIcon sx={{color: 'white'}}>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.title} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </ThemeProvider>
//   );
// };

// export default SideBar;

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  CalendarMonth,
  Campaign,
  Home,
  LibraryBooks,
  School,
  TrendingUp,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "../search-bar/SearchBar";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

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
const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#18597F",
          color: "white",
        },
      },
    },
  },
});
export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" textAlign={"center"}>Coligo</Typography>
        <SearchBar color="white" display={{xs:"block", sm:"none"}}/>
        <Box sx={{ width: "100%" }} role="presentation">
          <List>
            {siderbar.map((item, index) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  className="listItemButton"
                  sx={{
                    ":hover": {
                      backgroundColor: "white",
                      color: "themeColor.primary",
                    },
                  }}
                  onClick={() => console.log(item.title)}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </ThemeProvider>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            // mr: 2, 
            padding: 2,
            display: { sm: "none" },
            color:"text.main"
           }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
