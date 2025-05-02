import UserModel from '../models/userModel.js'

async function userDetailsController(req, res) {
  try {
    const user = await UserModel.findById(req.userId)
  

    res.status(200).json({
      data: user,
      success: true,
      error: false,
      message: 'ok✨✨',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default userDetailsController
