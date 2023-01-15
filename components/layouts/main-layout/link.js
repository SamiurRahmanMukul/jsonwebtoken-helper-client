import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function ActiveLink({ level, link }) {
  const router = useRouter();
  const color = router.pathname === link ? 'blue' : 'blue-gray';

  return (
    <Link href={link}>
      <Typography
        className='text-[16px] font-title-font font-medium transition-all duration-200 hover:text-color-primary'
        color={color}
        variant='h4'
        as='li'
      >
        {level}
      </Typography>
    </Link>
  );
}

export default ActiveLink;
