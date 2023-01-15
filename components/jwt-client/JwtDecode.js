import { Typography } from '@material-tailwind/react';
import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

function JwtDecode() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className='tab-panel-container'>
      <Typography
        className='tab-panel-title'
        variant={isDesktop ? 'h4' : 'h6'}
        color='blue'
      >
        JWT Token Decoding
      </Typography>
    </div>
  );
}

export default JwtDecode;
