import UserModel from '../models/userModel.js'

async function updateUserController(req, res) {
  try {

    const sessionUser = req.userId

    const { userId, email, name, gender, role } = req.body

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(gender && { gender: gender }),
      ...(role && { role: role }),
    }

    const user = await UserModel.findById(sessionUser)

    

    const updatedUser = await UserModel.findByIdAndUpdate(userId, payload ,{new : true})

    res.status(201).json({
        data : updatedUser ,
      message: 'updated Successfully ✨✨',
      error: false,
      success: true,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default updateUserController
