import React from 'react';
import '../../styles/App.css';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import COLORS from '../../utils/Colors';
import {
  MyList,
  AppBar,
  DrawerHeader,
} from '../CustomComponents/CustomComponents';
import {Link} from 'react-router-dom';

const drawerWidth = 350;

export default function HeaderDrawer(props) {
  const {
    handleDrawer,
    drawerOpen,
    setCurrentTopic,
    drawerItems,
  } = props;

  return (
    <div>
      <AppBar
        position="fixed"
        open={drawerOpen}
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px',
          background: 'rgba(23,23,23,0.92)',
          backdropFilter: 'saturate(180%) blur(20px)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => handleDrawer()}
            edge="state"
            disableRipple
            sx={{mr: 2, ...(drawerOpen && {display: 'none'})}}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none'}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{color: 'white'}}
            >
                binarySearchTrees
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          'width': drawerWidth,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            bgcolor: COLORS.drawerTop,
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawer}
            sx={{color: 'white'}}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MyList>
          {drawerItems.map((item, index) => (
            <Link
              to={item['slug']}
              style={{textDecoration: 'none'}}
              onClick={() => setCurrentTopic(item['topic'])}
              key={index}
            >
              <ListItem disableRipple button>
                <ListItemText primary={item['topic']} />
              </ListItem>
            </Link>
          ))}
        </MyList>
      </Drawer>
    </div>
  );
}
