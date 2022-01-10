import React from 'react';
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import ContentCard from '../Card/Card.js';
import Toolbar from "@mui/material/Toolbar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import COLORS from '../../utils/Colors.js';
import DashboardCard from '../DashboardCard/DashboardCard.js';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from "@mui/material/IconButton";
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReactMarkdown from 'react-markdown';
import "../../styles/App.css";

const HomePage = () => {
    return (
        <>
            <Grid container rowSpacing={2} columnSpacing={2} columns={{ xs: 1, sm: 2 }} gutterBottom>
                <Grid item xs={1} sm={1} sx={{
                    height: '27vh'
                }}>
                    <DashboardCard />
                </Grid>
                <Grid item xs={1} sm={1} sx={{
                    height: '27vh'
                }}>
                    <DashboardCard />
                </Grid>
                <Grid item xs={1} sm={1} sx={{
                    height: '27vh'
                }}>
                    <DashboardCard />
                </Grid>
                <Grid item xs={1} sm={1}
                    sx={{
                        height: '27vh'
                    }}>
                    <DashboardCard />
                </Grid>
            </Grid>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" >
                    Suggested Readings
                </Typography>
                <ChevronRightIcon />
            </Toolbar>
            <Grid container rowSpacing={2} columnSpacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gutterBottom>
                <Grid item xs={1} sm={1}>
                    <ContentCard
                        color={COLORS.orange}
                    />
                </Grid>
                <Grid item xs={1} sm={1}>
                    <ContentCard
                        color={COLORS.yellow}
                    />
                </Grid>
                <Grid item xs={1} sm={1}>
                    <ContentCard
                        color={COLORS.blue}
                    />
                </Grid>
                <Grid item xs={1} sm={1}>
                    <ContentCard
                        color={COLORS.green}
                    />
                </Grid>
            </Grid>
        </>
    )
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
        Data Structures
    </Link>,
    <Link
        underline="none"
        key="2"
        color="inherit"
        href="linked-list"
    >
        Linked Lists
    </Link>,
    <Typography key="3">
        Merge Two Linked Lists
    </Typography>,
];

const MyButton = styled(Button)(({ theme, c }) => ({
    color: c,
    backgroundColor: '#2C2C2E',
    '&:hover': {
        backgroundColor: '#545454',
    },
}));

const ArticlePage = (text) => {
    return (
        <div
            style={{
                maxWidth: '720px',
                margin: 'auto'
            }}
        >
            <Breadcrumbs
                sx={{ color: 'white' }}
                separator={<NavigateNextIcon fontSize="small" />}
            >
                {breadcrumbs}
            </Breadcrumbs>
            <Typography variant='h4'
                sx={{ paddingTop: '10px' }}
            >Merge Two Linked Lists</Typography>
            <div
                style={{
                    maxWidth: '200px',
                    display: "flex",
                    justifyContent: "space-between",
                    // border: "1px solid red",
                    paddingTop: '10px',
                }}
            >
                <Link sx={{ margin: 'auto 0', color: 'white' }}
                    underline='none'
                >
                    6 Min read
                </Link>
                <IconButton
                    color="inherit"
                    edge="state"
                    disableRipple
                >
                    <ShareIcon sx={{paddingRight: 1}}/>
                    <Typography> Share</Typography>
                </IconButton>
            </div>
            <div className='article' style={{ padding: '10px' }}>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
            <Stack spacing={1} direction="row">
                {/* <MyButton disableRipple variant="contained" c='#FF2D55' disableElevation>CODEFORCES</MyButton> */}
                <MyButton disableRipple variant="contained" c='#32D74B' disableElevation>GEEKS FOR GEEKS</MyButton>
                <MyButton disableRipple variant="contained" c='#FFD60A' disableElevation>LEETCODE</MyButton>
            </Stack>
        </div>
    )
}

export default function View() {
    const text = `
### Subheading One
Google’s Quantum AI team has had a productive 2021. Despite ongoing global challenges, we’ve made significant progress in our effort to build a fully error-corrected quantum computer, working towards our next hardware milestone of building an error-corrected quantum bit (qubit) prototype. At the same time, we have continued our commitment to realizing the potential of quantum computers in various applications. That's why we published results in top journals, collaborated with researchers across academia and industry, and expanded our team to bring on new talent and expertise.

#
#

##### Subheading Two 
Google’s Quantum AI [CommonMark](https://commonmark.org) has had a productive 2021. Despite ongoing global challenges, we’ve made significant progress in our effort to build a fully error-corrected quantum computer, working towards our next hardware milestone of building an error-corrected quantum bit (qubit) prototype. At the same time, we have continued our commitment to realizing the potential of quantum computers in various applications. That's why we published results in top journals, collaborated with researchers across academia and industry, and expanded our team to bring on new talent and expertise.

#

![alt text](https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/09/Impossible-Math_2880x1220_LHPA.jpg)

1. Google’s Quantum AI team has had a productive 2021.
2. Google’s Quantum AI team has had a productive 2021.Google’s Quantum AI team has had a productive 2021.
3. Google’s Quantum AI team has had a.

#
#

### Subheading One
Google’s Quantum AI team has had a productive 2021. Despite ongoing global challenges, we’ve made significant progress in our effort to build a fully error-corrected quantum computer, working towards our next hardware milestone of building an error-corrected quantum bit (qubit) prototype. At the same time, we have continued our commitment to realizing the potential of quantum computers in various applications. That's why we published results in top journals, collaborated with researchers across academia and industry, and expanded our team to bring on new talent and expertise.

#
#
`;
    return (
        <div>
            {ArticlePage(text)}
        </div>
    )
}