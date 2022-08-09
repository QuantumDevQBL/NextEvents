import React from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

import { getEventById } from '../../dummy-data-js'
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import CountdownTimer from '../../components/timer/CountDownTimer';


import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const eventsIdPage = () => {

  const router = useRouter();

  console.log(router.pathname);
  const queryId = router.query.eventId;

  const event = getEventById(queryId);

  console.log(event)

  if (!event) {
    return <Typography>No event found !!!</Typography>
  }

  const humanReadableDate = new Date(event.date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const formatAddress = event.location.replace(', ', '\n');

  const EVENT_MS = new Date(event.date).getTime();
  const NOW_IN_MS = new Date().getTime();

  const now = new Date();
  const eventTime = new Date(event.date);

  let TimeBeforeTheEvent;
  let EventTitle;

  if (eventTime > now) {
    TimeBeforeTheEvent = new Date(EVENT_MS - NOW_IN_MS).getTime();
    EventTitle = 'Time until event';

  } else if (eventTime < now) {
    TimeBeforeTheEvent = new Date(EVENT_MS - NOW_IN_MS).getTime();
    EventTitle = 'Too late';
  } else {
    console.log(`Both dates are equal`)
  }

  const dateTimeUntilEvent = NOW_IN_MS + TimeBeforeTheEvent;

  return (
    <Box sx={{ 
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      flexGrow: 1 }}>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <Typography variant="h4">{event.title}</Typography>

            <ImageListItem>
              <img
                src={`/${event.image}?w=248&fit=crop&auto=format`}
                srcSet={`/${event.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={event.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={event.title}
                subtitle={formatAddress}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${event.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <Typography variant="h4">{EventTitle}</Typography>
            <CountdownTimer targetDate={dateTimeUntilEvent} />
            <Typography variant="h4">About the event</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent = 'space-between'
            >
              <Chip 
              sx={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',marginBottom: 2, marginTop: 1}}
              icon={<LocationOnIcon />} label={formatAddress} color="success" />
              <Chip 
              sx={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',marginBottom: 2, marginTop: 1}}
              icon={< CalendarMonthIcon />} label={humanReadableDate} variant="secondary" />
            </Stack>

            <Typography>{event.description}</Typography>
            <Typography>{event.isFeatured}</Typography>

          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default eventsIdPage
