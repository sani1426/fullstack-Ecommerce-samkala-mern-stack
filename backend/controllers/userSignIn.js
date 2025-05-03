import UserModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


async function userSignInController(req, res) {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({
        message: 'please provide all field 🥱🥱',
        error: true,
        success: false,
      })
      throw new Error('please provide all field 🥱🥱')
    }

    const user = await UserModel.findOne({ email })
    if (!user) {
      res.status(404).json({
        message: 'user Not Found 😒😒',
        error: true,
        success: false,
      })
      throw new Error('user Not Found 😒😒')
    }

    const checkPassword = bcrypt.compareSync(password, user.password)

    if(checkPassword){
      const tokenData = {
          _id : user._id,
          email : user.email,
      }
      const tokenOption = {
        httpOnly : true,
        secure : true
    }
      const token = await  jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 8 });

      res.status(200).cookie('token', token, tokenOption).json({
        data: token,
        success: true,
        error: false,
        message: 'Login successfully✨✨',
      })
    } else {
      res.status(400).json({
        message: 'password is wrong 😡😡',
        error: true,
        success: false,
      })
      throw new Error('user Not Found 😒😒')
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default userSignInController
