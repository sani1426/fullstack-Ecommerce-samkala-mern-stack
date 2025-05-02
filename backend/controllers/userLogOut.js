

async function userLogOutController(req , res) {

    try {
        res.clearCookie("token")

        res.status(200).json({
            data: [],
            success: true,
            error: false,
            message: 'successfully logged Out✨✨',
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error 🤢🤢',
            error: true,
            success: false,
          })
    }
}

export default userLogOutController