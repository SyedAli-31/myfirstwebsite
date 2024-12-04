"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Portfolio", "Services", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Start
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#74C69D",
          boxShadow: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            minHeight: "64px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              height: "50px",
              ml: { xs: "16px", sm: "124px" }, // Responsive margin for smaller screens
              mt: { xs: "10px", sm: "35px" }, // Adjusted for mobile
            }}
          >
            {/* Logo */}
            <Image
              src="/image2.png"
              alt="Logo"
              width={64}
              height={50}
            />
            {/* Start Text */}
            <Box
              sx={{
                width: "99px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: { xs: "24px", sm: "40px" }, // Smaller font size for mobile
                color: "#FFFFFF",
                ml: "10px",
              }}
            >
              Start
            </Box>
          </Box>

          {/* Navigation Items */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // Hide on mobile
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontFamily: "Heebo",
                  mx: 2,
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" }, // Only show on mobile
              color: "#FFFFFF",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#F6F0F0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
