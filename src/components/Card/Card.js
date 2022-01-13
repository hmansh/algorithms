import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

export default function ContentCard(props) {
  const {topic, desc, pos} = props;
  const blue = '#0071f5';
  const yellow = '#fbbf23';
  return (
    <div style={{height: '100%', minHeight: '27vh'}}>
      <Card sx={{
        border: '5px solid white',
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'}}>
        <div style={{
          height: '50%',
          background: pos%2 ? blue: yellow,
        }}><Typography
            variant="h4"
            style={{
              padding: '1rem',
              color: 'white',
              fontWeight: '600',
            }}
          >{topic}</Typography>
        </div>
        <div style={{
          height: '51%',
          background: 'white',
        }}>
          <Typography
            style={{
              color: 'black',
              padding: '1rem 0.5rem',
              fontWeight: '500',
            }}
          >{desc}</Typography>
        </div>
      </Card>
    </div>
  );
}

{/* <CardMedia
          sx={{background: color || '#fff', height: '30%'}}
        >one</CardMedia>
        <CardContent sx={{
          background: '#131313',
          color: color || '#fff', height: '70%',
        }}>
          <Typography gutterBottom variant="h5" component="div">
            {topic}
          </Typography>
          <div style={{maxHeight: '55%'}}>
            <Typography sx={{
              color: 'white', fontSize: '0.8em',
              whiteSpace: 'no-wrap', overflow: 'hidden',
              textOverflow: 'ellipsis'}}>
              {desc}
            </Typography>
          </div>
        </CardContent> */}
