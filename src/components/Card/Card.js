import React from 'react';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import COLORS from '../../utils/Colors';

export default function ContentCard(props) {
    const { color } = props;
    return (
        <div style={{height: '100%'}}>
            <Card sx={{
                    border: "1px solid #353535",
                    background: 'none',
                    cursor: 'pointer',
                    height: '100%'}}>
                <CardMedia
                    sx={{background: color || '#fff', height: '30%'}}
                />
                <CardContent sx={{background: "#131313", color: color || '#fff', height: '70%'}}>
                    <Typography gutterBottom variant="h4" component="div">
                        Linked List
                    </Typography>
                    <div style={{ border: '1px solid red', maxHeight: '55%'}}>
                        <Typography sx={{color: "white", fontSize: '0.8em', whiteSpace: 'no-wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            A linked list is a linear collection of data elements whose
                            order is not given by their physical placement in memory.
                            Instead, each element points to the next.
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
