import express from 'express'
import userSignUpController from '../controllers/userSignUp.js'
import userSignInController from '../controllers/userSignIn.js'
import userDetailsController from '../controllers/userDetails.js'
import authToken from '../middlewares/authToken.js'
import userLogOutController from '../controllers/userLogOut.js'

const router = express.Router();


router.post("/signup" , userSignUpController)
router.post("/signin" , userSignInController)
router.get("/user-details" , authToken , userDetailsController)
router.get("/logout" , userLogOutController)


export default  router