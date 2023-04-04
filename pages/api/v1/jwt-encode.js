const jwt = require('jsonwebtoken');

const jwtEncode = (req, res) => {
  try {
    const { secret, data } = JSON.parse(req.body);

    // create jwt sign token
    const signToken = jwt.sign(data, secret, { algorithm: 'HS256' });

    res.status(200).json({
      result_code: 0,
      title: 'SUCCESS',
      message: 'Json web token create successful',
      data: { token: signToken }
    });
  } catch (err) {
    res.status(500).json({
      result_code: 1,
      title: 'FAILED',
      message: 'Json web token create failed',
      error: err
    });
  }
};

export default jwtEncode;
