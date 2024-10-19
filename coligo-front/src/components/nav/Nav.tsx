import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { Mail, Notifications } from "@mui/icons-material";
import SearchBar from "../search-bar/SearchBar";
import NavIcon from "../nav-icon/NavIcon";
import AvatarWrapper from "../avatar/Avatar";

function ResponsiveAppBar() {
  const icons = [
    {
      title: "Notifications",
      icon: <Notifications sx={{ color: "themeColor.main" }} fontSize="large" />,
    },
    {
      title: "Mail",
      icon: <Mail sx={{ color: "themeColor.main" }} fontSize="large" />,
    },
  ];

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl" sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontWeight: 700,
              color: "text.primary",
              textDecoration: "none",
              flexGrow: 3,
            }}
          >
            Welcome Talia,
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Welcome Talia,
          </Typography>

          {/* Desktop Screen */}

            {/* Search Bar & Avatar & Icons */}
              <Box
                sx={{
                  flexGrow: {xs: 0, sm: 1},
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                  width:{xs:"100%", sm:"auto"},
                  justifyContent: {xs:"end"}
                }}
              >
                <SearchBar display={{xs:"none", md:"block"}} color="text.primary"/>

                {icons.map((icon) => (
                  <NavIcon
                    key={icon.title}
                    title={icon.title}
                    Icon={
                      icon.icon
                    }
                  />
                ))}
            
                <AvatarWrapper
                  Avatar={
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  }
                />
              </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
