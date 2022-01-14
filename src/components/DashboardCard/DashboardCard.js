import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function DashboardCard(props) {
  const {title, slug} = props;
  return (
    <div style={{height: '100%'}}>
      <Card
        sx={{
          border: '1px solid #353535',
          backgroundImage: 'radial-gradient(black 1px, transparent 0)',
          backgroundSize: '25px 25px',
          cursor: 'pointer',
          height: '100%',
        }}
      >
        <CardContent sx={{background: 'none', height: '50%'}}>
          <Typography gutterBottom variant="h3" component="div" to={slug}>
            {title}
          </Typography>
        </CardContent>
        <CardContent
          sx={{background: 'none', height: '51%'}}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            disableRipple
            style={{height: '3rem', marginTop: '1rem', background: 'black'}}
            endIcon={<ArrowForwardIcon />}
            variant="contained"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
