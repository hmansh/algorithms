import React from 'react';
import "./styles/App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import COLORS from './utils/Colors';
import View from "./components/View/View";
import {MyList, AppBar, DrawerHeader, Main} from './components/CustomComponents/CustomComponents';

const drawerWidth = 350;








export default function App() {

  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOperation = () => {
    setDrawerOpen( prev => !prev);
  }

  return (
    <div className="App">
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed" open={drawerOpen} sx={{
            // background: COLORS.header 
              boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px",
              background: "rgba(23,23,23,0.92)",
              backdropFilter: "saturate(180%) blur(20px)",
            }}>
              <Toolbar>
                  <IconButton
                    color="inherit"
                    onClick={handleDrawerOperation}
                    edge="state"
                    disableRipple
                    sx={{ mr: 2, ...(drawerOpen && { display: "none"})}}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div" >
                    binarySearchTrees.com
                  </Typography>
              </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                bgcolor: COLORS.drawerTop,
                width: drawerWidth,
                boxSizing: "border-box"
              }
            }}
            variant='persistent'
            anchor='left'
            open={drawerOpen}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerOperation} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
            </DrawerHeader>
            <Divider/>
            <MyList  >
              {[
                "Random Topic", "Random Topic",
                "Random Topic", "Random Topic",
                "Random Topic", "Random Topic",
                "Random Topic", "Random Topic",
              ].map((text, index) => (
                  <ListItem disableRipple button key={text}>
                      <ListItemText primary={text + " " + index} />
                  </ListItem>
              ))}
            </MyList>
          </Drawer>
          <Main open={drawerOpen} style={{
            backgroundImage: "radial-gradient(#323232 1px, transparent 0)",
            backgroundSize: "25px 25px",
          }}>
              <DrawerHeader/>
              <div className='view'>
                <View/>
              </div>
          </Main>
        </Box>
    </div>
  )
}
