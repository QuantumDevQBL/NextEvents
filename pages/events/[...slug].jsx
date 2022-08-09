import React from 'react'
import { useRouter } from 'next/router';

const eventsSlugPage = () => {

  const router = useRouter();

  console.log(router.query);

  const name = router.query.eventId;
  const id = router.query.slug;

  return (
    <div>The project {name} for {id} projects</div>
  )
}

export default eventsSlugPage