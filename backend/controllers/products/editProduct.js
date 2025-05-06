import uploadProductPermission from '../../helpers/permission.js'
import ProductModel from '../../models/ProductModel.js'

async function EditProductController(req, res) {
  try {
    const productId = req.params.id

    if (!uploadProductPermission(req.userId)) {
      res.status(400).json({
        message: 'Permission denied 🥱😱',
        error: true,
        success: false,
      })
    }

    const editedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      req.body
    )
    res.status(200).json({
      message: 'Product Successfully  Editted ✨✨',
      error: false,
      success: true,
      data: editedProduct,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error 🤢🤢',
      error: true,
      success: false,
    })
  }
}

export default EditProductController
