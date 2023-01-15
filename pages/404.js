import { Button, Typography } from '@material-tailwind/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

function Error() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Head>
        <title>JWT Client ― 404 Page</title>
        <meta name='description' content='JWT ― Helper Client' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mt-[5%] flex flex-col items-center justify-center'>
        <img
          className='w-[500px] h-auto'
          src='/error-image.gif'
          alt='error'
        />

        <Typography
          variant={isDesktop ? 'h2' : 'h4'}
          color='blue'
        >
          404 - Not Found!
        </Typography>
        <Typography
          className='font-title-font font-medium'
          variant={isDesktop ? 'lead' : 'paragraph'}
          color='blue-gray'
        >
          Sorry, the page you visited does not exist.
        </Typography>

        <Link className='mt-10' href='/'>
          <Button
            className='capitalize font-bold'
            size={isDesktop ? 'lg' : 'md'}
            variant='gradient'
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Error;
