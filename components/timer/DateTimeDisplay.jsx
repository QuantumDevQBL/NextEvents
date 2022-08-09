import { Box, Typography } from '@mui/material';
import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box className={isDanger ? 'countdown danger' : 'countdown'}>
      <Typography variant="p">{value}</Typography>
      <Typography variant="span">{type}</Typography>
    </Box>
  );
};

export default DateTimeDisplay;
