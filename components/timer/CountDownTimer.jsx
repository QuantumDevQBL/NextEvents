import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountDown';
import { Box } from '@mui/system';
import { Chip, Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const ExpiredNotice = () => {
  return (
    <Box className="expired-notice">
      <Typography variant="text">Expired!!!</Typography>
      <Typography variant="text">Please select a future date and time.</Typography>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Box className="show-counter"
    >
      <Chip
        sx={[
          {
          width: '100%',
          padding: { xs: "20px 10px", sm: "20px 10px", md: "30px" },
          display: 'flex',
          justifyContent: 'space-around',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          marginBottom: 2, marginTop: 1,
          "& .MuiChip-label": {
            display: 'flex',
          },
          "& .MuiChip-icon": {
            display: { xs: "none", sm: "none", md: "block" },
          },
      }
    ]}

      icon={<AccessTimeFilledIcon />} label={
        <>
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <Typography>:</Typography>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <Typography>:</Typography>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <Typography>:</Typography>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </>
      } color="success" />

    </Box>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
