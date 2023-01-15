import {
  FacebookFilled, GithubOutlined, InstagramFilled, LinkedinFilled, TwitterSquareFilled
} from '@ant-design/icons';
import { } from '@ant-design/icons/lib/icons';
import { IconButton, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';

function MainFooter() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className='mx-auto max-w-screen-xl py-2 px-2 md:px-4'>
      <div className='flex flex-col items-center justify-center space-y-2 md:flex-row md:justify-between md:space-y-0'>
        <Typography
          className='font-title-font font-medium text-center'
          variant={isDesktop ? 'lead' : 'small'}
        >
          Copyright &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          JWT Client By
          {' '}
          <Link
            className='text-color-primary transition-all duration-200 hover:text-color-secondary'
            href='http://www.samiurrahmanmukul.epizy.com'
            target='_blank'
          >
            Samiur Rahman Mukul
          </Link>
        </Typography>

        <div className='inline-flex items-center gap-2 md:gap-4'>
          <Link href='https://www.facebook.com/SamiurRahmanMukul' target='_blank'>
            <IconButton
              className='rounded-full'
              variant='outlined'
              size={isDesktop ? 'md' : 'sm'}
              ripple
            >
              <FacebookFilled className='text-[14px] md:text-[16px]' />
            </IconButton>
          </Link>
          <Link href='https://www.instagram.com/samiur_rahman_mukul' target='_blank'>
            <IconButton
              className='rounded-full'
              variant='outlined'
              size={isDesktop ? 'md' : 'sm'}
              ripple
            >
              <InstagramFilled className='text-[14px] md:text-[16px]' />
            </IconButton>
          </Link>
          <Link href='https://www.twitter.com/SamiurRahMukul' target='_blank'>
            <IconButton
              className='rounded-full'
              variant='outlined'
              size={isDesktop ? 'md' : 'sm'}
              ripple
            >
              <TwitterSquareFilled className='text-[14px] md:text-[16px]' />
            </IconButton>
          </Link>
          <Link href='https://www.linkedin.com/in/SamiurRahmanMukul' target='_blank'>
            <IconButton
              className='rounded-full'
              variant='outlined'
              size={isDesktop ? 'md' : 'sm'}
              ripple
            >
              <LinkedinFilled className='text-[14px] md:text-[16px]' />
            </IconButton>
          </Link>
          <Link href='https://www.github.com/SamiurRahmanMukul' target='_blank'>
            <IconButton
              className='rounded-full'
              variant='outlined'
              size={isDesktop ? 'md' : 'sm'}
              ripple
            >
              <GithubOutlined className='text-[14px] md:text-[16px]' />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
