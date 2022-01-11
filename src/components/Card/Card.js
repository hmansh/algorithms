import React from 'react';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function ContentCard(props) {
    const { topic, desc, color } = props;
    return (
        <div style={{height: '100%', minHeight: '27vh'}}>
            <Card sx={{
                    border: "1px solid #353535",
                    background: 'none',
                    cursor: 'pointer',
                    height: '100%'}}>
                <CardMedia
                    sx={{background: color || '#fff', height: '30%'}}
                />
                <CardContent sx={{background: "#131313", color: color || '#fff', height: '70%'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {topic}
                    </Typography>
                    <div style={{ maxHeight: '55%'}}>
                        <Typography sx={{color: "white", fontSize: '0.8em', whiteSpace: 'no-wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            {desc}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
