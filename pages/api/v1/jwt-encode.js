const jwt = require('jsonwebtoken');

const jwtEncode = (req, res) => {
  try {
    const { secret, data } = JSON.parse(req.body);

    // create jwt sign token
    const signToken = jwt.sign(data, secret, { algorithm: 'HS256' });

    res.status(200).json({
      resultCode: 0,
      title: 'SUCCESS',
      message: 'Json web token creation successful',
      data: { token: signToken }
    });
  } catch (err) {
    res.status(500).json({
      resultCode: 1,
      title: 'FAILED',
      message: 'Json web token creation failed',
      error: err
    });
  }
};

export default jwtEncode;
