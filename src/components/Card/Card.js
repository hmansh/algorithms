import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export default function ContentCard(props) {
  const {topic, desc, pos} = props;
  const blue = '#0071f5';
  const yellow = '#fbbf23';
  return (
    <div style={{height: '100%', minHeight: '28vh'}}>
      <Card
        sx={{
          border: '5px solid white',
          background: 'white',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div
          style={{
            height: '50%',
            background: pos % 2 ? blue : yellow,
          }}
        >
          <Typography
            variant="h4"
            style={{
              padding: '1rem',
              color: 'white',
              fontWeight: '600',
            }}
          >
            {topic}
          </Typography>
        </div>
        <div
          style={{
            height: '51%',
            background: 'white',
          }}
        >
          <Typography
            style={{
              color: 'black',
              padding: '1rem 0.5rem',
              fontWeight: '500',
              fontSize: '0.85rem',
            }}
          >
            {desc}
          </Typography>
        </div>
      </Card>
    </div>
  );
}
