import React from 'react'

import EventList from '../components/events/EventList'

import { getFeaturedEvents } from '../dummy-data-js'

const index = () => {

  const events = getFeaturedEvents()

  return (
    <>
      <h1> Home page </h1>
      <EventList events={events} />
    </>
  )
}

export default index