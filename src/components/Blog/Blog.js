import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Blog() {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', padding: '1rem' }}>
                    <Typography variant="h3" gutterBottom component="div">
                        Linked Lists
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        Introduction
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Given two linked lists that represent two large positive numbers. Subtract the smaller number from the larger one and return the difference as a linked list. Note that the input lists may be in any order, but we always need to subtract smaller from the larger ones.
                        It may be assumed that there are no extra leading zeros in input lists.
                        Examples:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Calculate sizes of given two linked lists.
                        If sizes are not the same, then append zeros in the smaller linked list.
                        If the size is the same, then follow the below steps:
                        Find the smaller valued linked list.
                        One by one subtract nodes of the smaller-sized linked list from the larger size. Keep track of borrow while subtracting.
                        Following is the implementation of the above approach.
                    </Typography>
                    <Typography variant="h4" gutterBottom component="div">
                        Introduction
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}
