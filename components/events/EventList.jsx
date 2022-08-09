import React from 'react'

import Box from '@mui/material/Box';

import EventItem from './EventItem';

const EventList = (props) => {
  const { events } = props;

  console.log(events);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
      }}
    >
      {events && events.map((item, key) => {
        return (
          <EventItem key={key} item={item} />
        )
      })}
    </Box>
  )
}

export default EventList
