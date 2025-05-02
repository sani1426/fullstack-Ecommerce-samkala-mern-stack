import UserModel from '../models/userModel.js'

async function GetAllUsersController(req, res) {
  try {
    const allUsers = await UserModel.find()

    res.status(200).json({
      data: allUsers,
      success: true,
      error: false,
      message: 'successfully Get All Users✨✨',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default GetAllUsersController
