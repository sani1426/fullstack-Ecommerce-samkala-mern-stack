import express  from 'express'
import uploadProductController from '../controllers/products/uploadProduct.js'
import authToken from '../middlewares/authToken.js'
import getAllProductController from '../controllers/products/getAllProduct.js'
import EditProductController from '../controllers/products/editProduct.js'
import getAllCategories from '../controllers/products/getAllCategory.js'

const router = express.Router()


router.post("/create" ,authToken , uploadProductController)
router.get("/" , getAllProductController)
router.post("/edit-product/:id" ,authToken , EditProductController)
router.get("/all-categories" ,authToken , getAllCategories)

export  default router


