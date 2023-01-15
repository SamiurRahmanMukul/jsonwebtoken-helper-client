import {
  Button, IconButton, MobileNav, Navbar
} from '@material-tailwind/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ActiveLink from './link';

function MainNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isDesktop) {
      setOpenNav(false);
    }
  }, [isDesktop]);

  return (
    <Navbar className='mx-auto max-w-screen-xl py-2 px-4 md:px-8 md:py-4'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        {/* app logo */}
        <Link href='/'>
          <img
            className='w-[100px] md:w-[140px]'
            src='/jwt-logo.png'
            title='JWT Logo'
            alt='jwt-logo'
          />
        </Link>

        {/* default navbar menu */}
        <div className='hidden md:block'>
          <ul className='mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-10'>
            <ActiveLink level='About The Platform' link='/about-platform' />
            <ActiveLink level='FAQ´s' link='/faq' />
            <ActiveLink level='Contact Us' link='/contact-us' />
          </ul>
        </div>

        {/* right button */}
        <Link href='https://jwt.io' target='_blank'>
          <Button
            className='hidden md:inline-block'
            variant='gradient'
            size='lg'
          >
            <span>JWT.IO</span>
          </Button>
        </Link>

        {/* navbar toggle button */}
        <IconButton
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden'
          onClick={() => setOpenNav(!openNav)}
          ripple={false}
          variant='text'
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* mobile navbar */}
      <MobileNav open={openNav}>
        {/* mobile navbar menu */}
        <div className='flex flex-col items-start justify-between mt-8 space-y-4'>
          <ActiveLink level='About The Platform' link='/about-platform' />
          <ActiveLink level='FAQ´s' link='/faq' />
          <ActiveLink level='Contact Us' link='/contact-us' />
        </div>

        {/* mobile navbar right button */}
        <Link href='https://jwt.io' target='_blank'>
          <Button
            className='my-4'
            variant='gradient'
            fullWidth
            size='md'
          >
            <span>JWT.IO</span>
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
}

export default MainNavbar;
