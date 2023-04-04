import { EyeInvisibleOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import {
  Alert, Button, Input, Textarea, Typography
} from '@material-tailwind/react';
import React, { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import useTimeout from '../../hooks/useTimeout';
import isEmptyObject from '../../lib/isEmptyObject';

function JwtEncode() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [secretKey, setSecretKey] = useState({ state: '', error: false });
  const [secretKeyVisible, setSecretKeyVisible] = useState(false);
  const [payload, setPayload] = useState({ state: {}, error: false });
  const [alert, setAlert] = useState({ visible: false, type: 'success', message: '' });
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  // timeout callback
  const [timeout] = useTimeout(() => {
    setAlert((prevState) => ({ ...prevState, visible: false }));
  }, 2000);

  timeout();

  // function to handle create jwt token
  const handleGenerateToken = () => {
    if (!secretKey.state) {
      setSecretKey((prevState) => ({
        ...prevState, error: true
      }));
      setAlert((prevState) => ({
        ...prevState, visible: true, type: 'error', message: 'JWT Secret Key filed is required'
      }));
    } else if (isEmptyObject(payload.state)) {
      setPayload((prevState) => ({
        ...prevState, error: true
      }));
      setAlert((prevState) => ({
        ...prevState, visible: true, type: 'error', message: 'Token Payload filed is required'
      }));
    } else {
      setLoading(true);
      fetch('/api/v1/jwt-encode', {
        method: 'POST',
        body: JSON.stringify({ secret: secretKey.state, data: payload.state }),
      }).then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data?.result_code === 0 && data?.title === 'SUCCESS') {
            setToken(data?.data?.token);
            setAlert((prevState) => ({
              ...prevState,
              visible: true,
              type: 'success',
              message: 'Congrats! JWT token creation successful'
            }));
          } else {
            setAlert((prevState) => ({
              ...prevState,
              visible: true,
              type: 'error',
              message: 'Something went wrong. App server error'
            }));
          }
        })
        .catch((err) => {
          setLoading(false);
          setAlert((prevState) => ({
            ...prevState,
            visible: true,
            type: 'error',
            message: err?.message || 'Something went wrong. App server error'
          }));
        });
    }
  };

  return (
    <div className='tab-panel-container'>
      <Typography
        className='tab-panel-title'
        variant={isDesktop ? 'h4' : 'h6'}
        color='blue'
      >
        JWT Token Create / JWT Encode
      </Typography>

      {/* jwt encoded input field */}
      <div className='m-5 space-y-5 md:m-10 md:w-1/2'>
        <Alert
          show={alert.visible}
          animate={{ mount: { y: 0 }, unmount: { y: 100 } }}
          dismissible={{
            onClose: () => setAlert((prevState) => ({
              ...prevState, visible: false
            }))
          }}
          color={alert.type === 'error' ? 'red' : 'green'}
        >
          {alert.message}
        </Alert>

        {/* input field secret key */}
        <Input
          className='text-[14px]'
          label='JWT Secret Key'
          variant='outlined'
          color='blue'
          size='lg'
          value={secretKey.state}
          error={secretKey.error}
          onChange={(e) => setSecretKey((prevState) => ({
            ...prevState, state: e.target.value, error: false
          }))}
          type={secretKeyVisible ? 'string' : 'password'}
          icon={secretKeyVisible
            ? (
              <EyeOutlined
                className='text-[16px] font-medium hover:text-color-primary'
                onClick={() => setSecretKeyVisible(!secretKeyVisible)}
              />
            )
            : (
              <EyeInvisibleOutlined
                className='text-[16px] font-medium hover:text-color-primary'
                onClick={() => setSecretKeyVisible(!secretKeyVisible)}
              />
            )}
        />

        {/* input field payload */}
        <Textarea
          className='text-[14px]'
          label='Token Payload'
          color='blue'
          value={payload.text}
          error={payload.error}
          onChange={(e) => setPayload((prevState) => ({
            ...prevState, state: e.target.value, error: false
          }))}
        />

        {/* token generate button */}
        <Button
          className={isDesktop ? 'w-[200px]' : 'w-full'}
          fullWidth={!isDesktop}
          variant='gradient'
          color='blue'
          size='lg'
          onClick={handleGenerateToken}
          disabled={loading}
        >
          {loading ? (<LoadingOutlined />) : 'Create JWT Token'}
        </Button>

        {/* created token view text-area */}
        {token && (
          <div className='!mt-10'>
            <Textarea
              className='text-[14px]'
              label='JWT Created Token'
              value={token}
              color='green'
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default JwtEncode;
