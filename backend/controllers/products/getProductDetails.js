import ProductModel from '../../models/ProductModel.js'

async function getProductDetailsController(req, res) {
  try {
    const id = req.params.id

    const product = await ProductModel.findById(id)

    if (!product) {
      res.status(404).json({
        message: 'Product Not Found 🤢😡',
        error: true,
        success: false,
      })
    }

    res.status(200).json({
      message: 'Product Successfully Finded ✨✨',
      error: false,
      success: true,
      data: product,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default getProductDetailsController