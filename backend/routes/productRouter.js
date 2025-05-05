import express  from 'express'
import uploadProductController from '../controllers/products/uploadProduct.js'
import authToken from '../middlewares/authToken.js'

const router = express.Router()


router.post("/create" ,authToken , uploadProductController)

export  default router


