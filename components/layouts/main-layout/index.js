import Head from 'next/head';
import React from 'react';
import MainNavbar from './navbar';

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='JWT ― Helper Client' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen w-full'>
        <header className='!h-[100px]'>
          <MainNavbar />
        </header>

        <section className='!min-h-[calc(100vh-200px)] mx-auto w-full md:w-5/6 md:px-0'>
          {children}
        </section>

        <footer className='!h-[100px]' />
      </main>
    </>
  );
}

export default MainLayout;
