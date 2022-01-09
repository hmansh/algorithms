import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContentCard from './ContentCard';

export default function GridView() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ padding: '1rem' }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 2, md: 3, lg: 12 }}
            >
                {Array.from(Array(32)).map((_, index) => (
                    <Grid item xs={1} sm={1} md={1} lg={3} key={index}>
                        <ContentCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
