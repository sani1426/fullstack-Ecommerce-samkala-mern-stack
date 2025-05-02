import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name : {
        type: String ,
        required: true ,
        trim : true
    },
    email: {
        type: String ,
        required: true ,
        unique: true
    },
    password : {
        type : String ,
        required: true ,
        trim : true
    },
    profilePic : {
        type : String
    },
    role : {
        type:String ,
        enum :  ["GENERAL" , "ADMIN"],
        default : "GENERAL"
    },
    gender : {
        type : String ,
        enum : ["men" , "women"],
        default : "men"
    }
}, {timestamps: true
});

const UserModel = mongoose.model('User' , userSchema);


export default UserModel;