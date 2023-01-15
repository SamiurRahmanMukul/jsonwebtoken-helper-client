import {
  Tab, TabPanel, Tabs, TabsBody, TabsHeader
} from '@material-tailwind/react';
import JwtDecode from '../components/jwt-client/JwtDecode';
import JwtEncode from '../components/jwt-client/JwtEncode';
import MainLayout from '../components/layouts/main-layout';

export default function Home() {
  const data = [
    {
      label: 'JWT Encode',
      value: 'encode',
      desc: <JwtEncode />
    },
    {
      label: 'JWT Decode',
      value: 'decode',
      desc: <JwtDecode />
    }
  ];

  return (
    <MainLayout title='JWT Client ― Home'>
      <Tabs
        className='mx-auto max-w-screen-xl px-1 md:px-0'
        value='encode'
      >
        <TabsHeader className='h-[50px]'>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel className='px-0' key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </MainLayout>
  );
}
