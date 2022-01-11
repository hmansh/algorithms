import React from 'react';
import "./styles/App.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import COLORS from './utils/Colors';
import View from "./components/View/View";
import { MyList, AppBar, DrawerHeader, Main } from './components/CustomComponents/CustomComponents';
import { BrowserRouter, Link } from 'react-router-dom';
import { algorithmsTopics, dataStructureTopics} from './utils/staticData';

const drawerWidth = 200;

export default function App() {

  // const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [currentTopic, setCurrentTopic] = React.useState('data-structures');

  const handleDrawerOperation = () => {
    setDrawerOpen(prev => !prev);
  }

  const handleCurrentTopic = (topic) => {
    setCurrentTopic(topic);
  }

  const drawerData = { 
    'data-structures': {
      name: 'Data Structures',
      data: dataStructureTopics,
    },
    'algorithms': {
      name: 'Algorithms',
      data: algorithmsTopics
    },
    'codeforces': {
      name: 'Codeforces',
      data: []
    },
    'questions': {
      name: 'Questions',
      data: []
    }
  }

  return (
    <BrowserRouter>
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
                sx={{ mr: 2, ...(drawerOpen && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" noWrap component="div" style={{ color: 'white' }} >
                  binarySearchTrees.com
                </Typography>
              </Link>
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
            <Divider />
            <MyList  >
              { Object.keys(drawerData).map((key, index) => (
                <Link to='/topics' style={{textDecoration: 'none'}} onClick={() => handleCurrentTopic(key)}>
                  <ListItem disableRipple button key={key}>
                    <ListItemText primary={drawerData[key].name} />
                  </ListItem>
                </Link>
              ))}
            </MyList>
          </Drawer>
          <Main open={drawerOpen} style={{
            backgroundImage: "radial-gradient(#323232 1px, transparent 0)",
            backgroundSize: "25px 25px",
          }}>
            <DrawerHeader />
            <div className='view'>
              <View
                cardList={drawerData[currentTopic].data}
                setCurrentTopic={setCurrentTopic}
              />
            </div>
          </Main>
        </Box>
      </div>
    </BrowserRouter>
  )
}
