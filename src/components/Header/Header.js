import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from '@mui/material/Grid';
import ContentCard from '../Card/Card.js';
import Paper from '@mui/material/Paper';

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        minHeight: '100vh',
        background: '#050505',
        // background: 'red',
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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "4em",
    textAlign: 'right',
    paddingTop: '4em',
    color: "black"
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ bgcolor: "#161616" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Algorithms
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        bgcolor: "#161616",
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ color: 'white' }}>
                    {["Merge Two Linked Lists", "Add Two Linked List", "Traverse Linked List"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Box sx={{ flexGrow: 1 }}>
                    {/* <Grid
                        container
                        spacing={{ xs: 2}}
                        columns={{ xs: 1, sm: 2, md: 3, lg: 12 }}
                    >
                        {Array.from(Array(32)).map((_, index) => (
                            <Grid item xs={1} sm={1} md={1} lg={3} key={index}
                                sx={{ height: '30vh'}}
                            >   
                                <ContentCard />
                            </Grid>
                        ))}
                    </Grid> */}
                    <div>
                        <Grid container rowSpacing={2} columnSpacing={2}
                            columns={{ xs: 1, sm: 2 }}
                            gutterBottom
                        >
                            <Grid item xs={1} sm={1} >
                                <Item sx={{
                                    height: '25vh',
                                    backgroundImage: "radial-gradient(black 1px, transparent 0)",
                                    backgroundSize: "20px 20px"
                                }}>
                                    <Typography variant="h1">Title One</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <Item sx={{
                                    height: '25vh',
                                    backgroundImage: "radial-gradient(black 1px, transparent 0)",
                                    backgroundSize: "20px 20px"
                                }}>
                                    <Typography variant="h1">Title Two</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <Item sx={{
                                    height: '25vh',
                                    backgroundImage: "radial-gradient(black 1px, transparent 0)",
                                    backgroundSize: "20px 20px"
                                }}>
                                    <Typography variant="h1">Title Three</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={1} sm={1}>
                                <Item sx={{
                                    height: '25vh',
                                    backgroundImage: "radial-gradient(black 1px, transparent 0)",
                                    backgroundSize: "20px 20px"
                                }}>
                                    <Typography variant="h1">Title Four</Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ paddingTop: '1rem' }}>
                        <Typography variant="h5" gutterBottom component="div" >Suggested Reading ></Typography>
                        <Grid
                            container
                            spacing={{ xs: 2 }}
                            columns={{ xs: 1, sm: 2, md: 3, lg: 12 }}

                        >
                            {Array.from(Array(4)).map((_, index) => (
                                <Grid item xs={1} sm={1} md={1} lg={3} key={index} sx={{ height: '30vh' }}>
                                    <ContentCard />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Box>
            </Main>
        </Box>
    );
}
