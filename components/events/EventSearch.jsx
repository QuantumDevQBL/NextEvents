import React, { useRef } from 'react'
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';

const EventSearch = (props) => {

  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }

  return (

    <>
      <Card variant="soft" sx={{ width: 'fit-content', margin: 'auto' }}>
        <form onSubmit={submitHandler}>
          <Box sx={{ 
            
            display: 'flex', 
            flexDirection: {xs:'column',sm:'row',md:'row'} , 
            gap: 3, 
            justifyContent: 'center', 
            alignItems: 'center',
            'select' : {
              background: 'primary',
              borderRadius: '7px',
              padding: '10px',
              border: '1px',
              fontSize: '1rem',
            },
            'option' : {},
            }}>
            <select id='year' ref={yearInputRef}>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>
            <select id='month' ref={monthInputRef}>
              <option value='1'>January</option>
              <option value='2'>February</option>
              <option value='3'>March</option>
              <option value='4'>April</option>
              <option value='5'>May</option>
              <option value='6'>June</option>
              <option value='7'>July</option>
              <option value='8'>August</option>
              <option value='9'>Septemer</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select>
            <Button type="submit" size="md" variant='soft' color="info">Go to result</Button>
          </Box>
        </form>
      </Card>    
    </>


  )
}

export default EventSearch