import ProductModel from '../../models/ProductModel.js'

async function getProductByCategoryController(req, res) {
  try {
    const categoryName = req.params.category

    const products = await ProductModel.find({ category: categoryName }).sort({
      createdAt: -1,
    })

    res.status(200).json({
      message: `Successfully get Your  ${categoryName} products ✨✨`,
      error: false,
      success: true,
      data: products,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default getProductByCategoryController
