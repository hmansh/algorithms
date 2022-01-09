import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import ContentCard from '../Card/Card.js';
import Toolbar from "@mui/material/Toolbar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import COLORS from '../../utils/Colors.js';
import DashboardCard from '../DashboardCard/DashboardCard.js';

export default function View() {
    return (
        <div>
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
        </div>
    )
}