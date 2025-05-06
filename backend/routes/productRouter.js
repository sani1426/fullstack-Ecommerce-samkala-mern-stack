import express  from 'express'
import uploadProductController from '../controllers/products/uploadProduct.js'
import authToken from '../middlewares/authToken.js'
import getAllProductController from '../controllers/products/getAllProduct.js'

const router = express.Router()


router.post("/create" ,authToken , uploadProductController)
router.get("/" , getAllProductController)

export  default router


