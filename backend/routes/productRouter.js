import express  from 'express'
import uploadProductController from '../controllers/products/uploadProduct.js'
import authToken from '../middlewares/authToken.js'
import getAllProductController from '../controllers/products/getAllProduct.js'
import EditProductController from '../controllers/products/editProduct.js'
import getProductByCategoryController from '../controllers/products/getProductByCategory.js'
import getAllCategoriesController from '../controllers/products/getAllCategory.js'

const router = express.Router()


router.post("/create" ,authToken , uploadProductController)
router.get("/" , getAllProductController)
router.post("/edit-product/:id" ,authToken , EditProductController)
router.get("/all-categories"  , getAllCategoriesController)
router.get("/get-products/:category"  , getProductByCategoryController)


export  default router


