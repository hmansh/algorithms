import React from 'react';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function ContentCard() {
    return (
        <div style={{height: '100%'}}>
            <Card sx={{
                // border: "1px solid #353535",
                background: '#131313',
                height: '100%'}}>
                <CardMedia
                    component="img"
                    // alt="green iguana"
                    height="90"
                    // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCZDBG_GkepLlVovwn816LyPKRR6NC5N2sg&usqp=CAU"
                    sx={{background:"white"}}
                />
                <CardContent sx={{background: "#131313", color: 'white'}}>
                    <Typography gutterBottom variant="h4" component="div">
                        Linked List
                    </Typography>
                    <Typography sx={{color: "white", fontSize: '0.9em'}}>
                        A linked list is a linear collection of data elements whose
                        order is not given by their physical placement in memory.
                        Instead, each element points to the next.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
