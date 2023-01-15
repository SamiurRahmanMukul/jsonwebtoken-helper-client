import { Typography } from '@material-tailwind/react';
import MainLayout from '../components/layouts/main-layout';

export default function Home() {
  return (
    <MainLayout title='JWT Client ― Home'>
      <Typography
        className='text-center text-color-primary font-title-font'
        variant='h2'
        textGradient
      >
        JWT ― Helper Client
      </Typography>
    </MainLayout>
  );
}
