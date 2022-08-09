import React from 'react'
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { getFilteredEvents } from '../../dummy-data-js'
import EventList from '../../components/events/EventList'
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Button from '@mui/joy/Button';

const eventsSlugPage = () => {

  const router = useRouter();

  console.log(router.query);
  const filteredData = router.query.slug;

  console.log(filteredData);

  if (!filteredData) {
    return <Typography>Loading...</Typography>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
    return (
      <Box
        sx={{
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          top: '50%',
          left: '50%',

        }}>
        <Typography>Invalid filter please adjust your values...</Typography>
        <Button size="md" variant='soft' color="info">
          <Link
            level="h5"
            underline="hover"
            href="/events"

            sx={{
              fontFamily: 'Lato',
              fontSize: '1.5rem', marginRight: '10px'
            }}>
            Browse all events
          </Link>
        </Button>
      </Box>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Box
        sx={{
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          top: '50%',
          left: '50%',

        }}>
        <Typography>No results for the chosen filter...</Typography>
        <Button size="md" variant='soft' color="info">
          <Link
            level="h5"
            underline="hover"
            href="/events"
            sx={{
              fontFamily: 'Lato',
              fontSize: '1.5rem', marginRight: '10px'
            }}>
            Browse all events
          </Link>
        </Button>
      </Box>
    )
  }

  return (
    <Box>
      <Typography fontSize="3rem" variant="h1" textAlign="center">Filtered events</Typography>
      <EventList events={filteredEvents} />
    </Box>
  )
}

export default eventsSlugPage