import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({name,image,key}) {
  return (
    <Card sx={{ maxWidth: 500 }} key={key}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
            <div style={{width:300}}>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
