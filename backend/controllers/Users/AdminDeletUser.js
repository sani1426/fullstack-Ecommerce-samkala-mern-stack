import UserModel from '../../models/userModel.js'

async function AdminDeleteUser(req ,res){

    try {
        const id = req.params ;

        const deletedUser = await UserModel.findByIdAndDelete(id)

        res.status(200).json({
            message: 'User Successfully Deleted',
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

export default AdminDeleteUser