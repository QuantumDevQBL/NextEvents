import React from 'react'

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import JoyLink from '@mui/joy/Link';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';

const EventItem = (props) => {


  console.log(props);

  const { title, id, image, location, date, description } = props.item;

  console.log(title);
  console.log(id);
  console.log(image);
  console.log(location);
  console.log(date);
  console.log(description);

  const humanReadableDate = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const formatAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <Box>
      <Card sx={{ position: 'relative', maxWidth: 345, margin: '10px 10px' }}>
        <Box
          sx={{
            position: 'absolute', top: 5, right: 5,
          }}
        >
          <Chip icon={<StarIcon />} label="Stared" color="success" />
        </Box>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Chip icon={< CalendarMonthIcon />} label={humanReadableDate} variant="secondary" />
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 2
            }}
          >
            <Chip icon={<LocationOnIcon />} label={formatAddress} color="success" />
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >

          <Button variant="contained" color="primary">
            <JoyLink
              href={exploreLink}
              underline="none"
              variant="soft"
              color="success"
              endDecorator={
                <Chip icon={<ArrowForwardIcon />} label="Explore!" color="success" size="sm" sx={{ borderRadius: 'xs' }} />
              }
              sx={{ '--Link-gap': '0.5rem', pr: 0, pl: 1 }}
            >
              Explore event
            </JoyLink>
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default EventItem