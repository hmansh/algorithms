import React from 'react';
import { dashboardCardsData, dataStructureTopics } from '../utils/staticData';
import Toolbar from "@mui/material/Toolbar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardCard from '../components/DashboardCard/DashboardCard.js';
import Grid from '@mui/material/Grid';
import "../styles/App.css";
import Typography from "@mui/material/Typography";
import ContentCard from '../components/Card/Card.js';

export default function Dashboard() {
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={2} columns={{ xs: 1, sm: 2 }} gutterBottom>
                {dashboardCardsData.map(item => (
                    <Grid item xs={1} sm={1} sx={{ height: '27vh' }}>
                        <DashboardCard
                            title={item.title}
                            slug={item.slug}
                        />
                    </Grid>
                ))}
            </Grid>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" >
                    Suggested Readings
                </Typography>
                <ChevronRightIcon />
            </Toolbar>
            <Grid container rowSpacing={2} columnSpacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gutterBottom>
                {dataStructureTopics.slice(0, 4).map(item => (
                    <Grid item xs={1} sm={1}>
                        <ContentCard
                            topic={item.topic}
                            slug={item.slug}
                            desc={item.desc}
                            api={item.api}
                            color={item.color}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}