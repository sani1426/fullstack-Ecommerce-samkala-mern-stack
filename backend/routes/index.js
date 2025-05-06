import express from 'express'
import userSignUpController from '../controllers/userSignUp.js'
import userSignInController from '../controllers/userSignIn.js'
import userDetailsController from '../controllers/userDetails.js'
import authToken from '../middlewares/authToken.js'
import userLogOutController from '../controllers/userLogOut.js'
import GetAllUsersController from '../controllers/allUsers.js'
import updateUserController from '../controllers/updateUser.js'
import AdminDeleteUser from '../controllers/Users/AdminDeletUser.js'

const router = express.Router()


//  Auth Routes //
router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', authToken, userDetailsController)
router.get('/logout', userLogOutController)


//   Admin Routes user //
router.get('/' ,authToken , GetAllUsersController)
router.post('/update-user'  , updateUserController)
router.delete('/delete/:id'  , AdminDeleteUser)


export default router
