import jwt from 'jsonwebtoken'

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token || req.header
console.log("aut token",token);
    if (!token) {
      return res.status(400).json({
        message: 'user not logged in 😱😱',
        error: true,
        success: false,
      })
    }
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) console.log('error auth', err)

      req.userId = decoded?._id
      next()
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default authToken
