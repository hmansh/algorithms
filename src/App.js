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

const drawerWidth = 350;

const MyList = styled(List)({
  '& .MuiListItem-root': {
    color: '#fff',
    paddingLeft: 24,
    paddingRight: 24,
    width: '95%',
    margin: 'auto',
    borderRadius: 5,
    '&:hover': {
      background: COLORS.drawerBtnHover,
    }
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open}) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }), ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0,1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
      flexGrow: 1,
      minHeight: '100vh',
      background: COLORS.body,
      color: 'white',
      padding: theme.spacing(2),
      transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
          transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen
          }),
          marginLeft: 0
      })
  })
);

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
            <MyList>
              {[
                "Random Topic", "Random Topic",
                "Random Topic", "Random Topic",
                "Random Topic", "Random Topic",
                "Random Topic", "Random Topic",
              ].map((text, index) => (
                  <ListItem button key={text}>
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
