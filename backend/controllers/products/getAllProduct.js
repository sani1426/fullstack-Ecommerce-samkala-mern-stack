import ProductModel from '../../models/ProductModel.js'

async function getAllProductController(req, res) {
  try {
    const AllProduct = await ProductModel.find().sort({createdAt : -1})

    res.status(200).json({
      message: 'get All Products Successfully ✨✨',
      error: false,
      success: true,
      data: AllProduct,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default getAllProductController
