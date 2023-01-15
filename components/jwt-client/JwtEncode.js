import { Typography } from '@material-tailwind/react';
import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

function JwtEncode() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className='tab-panel-container'>
      <Typography
        className='tab-panel-title'
        variant={isDesktop ? 'h4' : 'h6'}
        color='blue'
      >
        JWT Token Create / JWT Encode
      </Typography>
    </div>
  );
}

export default JwtEncode;
