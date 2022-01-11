import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Button from '@mui/material/Button';
import COLORS from '../../utils/Colors';

const drawerWidth = 200;

export const MyList = styled(List)({
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

export const MyButton = styled(Button)(({ theme, c }) => ({
    color: c,
    backgroundColor: '#2C2C2E',
    '&:hover': {
        backgroundColor: '#545454',
    },
}));

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
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

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

export const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        minHeight: '100vh',
        background: COLORS.body,
        color: 'white',
        padding: theme.spacing(0),
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