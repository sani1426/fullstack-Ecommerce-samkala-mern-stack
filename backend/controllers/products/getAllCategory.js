import ProductModel from '../../models/ProductModel.js'

async function getAllCategories(req, res) {
  try {
    const categories = await ProductModel.distinct('category')
    const productByCategory = []

    for (const category of categories) {
      const product = await ProductModel.findOne({ category })

      if (product) {
        productByCategory.push(product)
      }
    }
    res.status(200).json({
      message: 'Successfully Get All Categories ✨✨',
      error: false,
      success: true,
      data: productByCategory,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default getAllCategories
