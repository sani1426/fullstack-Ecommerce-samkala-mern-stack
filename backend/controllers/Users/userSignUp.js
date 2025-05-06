import UserModel from "../../models/userModel.js"
import bcrypt from 'bcryptjs'

async function userSignUpController(req, res) {
  try {
    const { name, email, password , gender  } = req.body

    if (!name || !email || !password) {
      res.status(400).json({
        message : "please provide all field",
        error: true ,
        success: false
      })
      throw new Error('please provide all field')
    }
    const alreadyUser = await UserModel.findOne({email});
    if(alreadyUser){
      res.status(400).json({
        message : "user already exits",
        error: true ,
        success: false
      })
      throw new Error("user already exits.")
    }


    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    if (!hashedPassword) throw new Error('Something is Wrong 😢😢')

    const user = new UserModel({
      name,
      email,
      role : "GENERAL",
      password: hashedPassword,
      gender,
    })

    const newUser = await user.save()

    res.status(201).json({
      data: newUser,
      success: true,
      error: false,
      message: 'user created successfully ✨✨',
    })
  } catch (error) {
    res.status(500).json({
      message: error,
      error: true,
      success: false,
    })
  }
}

export default userSignUpController
