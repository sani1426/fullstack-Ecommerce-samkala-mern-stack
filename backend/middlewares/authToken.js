import jwt from 'jsonwebtoken'

async function authToken(req,res,next){
    try{
        const token = req.cookies?.token


        if(!token){
            return res.status(404).json({
                message : "Please Login...!",
                error : true,
                success : false
            })
        }

        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            console.log(err)
            console.log("decoded",decoded)
            
            if(err){
                console.log("error auth", err)
            }

            req.userId = decoded?._id

            next()
        });


    }catch(err){
        res.status(500).json({
            message : "Server Error",
            data : [],
            error : true,
            success : false
        })
    }
}


export default authToken