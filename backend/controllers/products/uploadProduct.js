import uploadProductPermission from "../../helpers/permission.js";
import ProductModel from "../../models/ProductModel.js"


async function uploadProductController(req , res){

    try {

        const sessionUserId = req.userId 

        if(!uploadProductPermission(sessionUserId)){
            res.status(500).json({
                message: 'just Admin Can Upload New Product 😒😒',
                error: true,
                success: false,
              })
        }

        const uploadProduct = new ProductModel(req.body)

        const savedProduct = await uploadProduct.save();

        res.status(201).json({
            message: 'new Product successfully Saved ✨✨',
            error: false,
            success: true,
            data : savedProduct
          })
        
    } catch (error) {
        
        res.status(500).json({
            message: 'Server Error 🤢🤢',
            error: true,
            success: false,
          })
    }
}


export default uploadProductController



// {
//     productName : req.body.productName ,
//     brandName : req.body.brandName ,
//     category : req.body.category ,
//     productImage : req.body.productImage ,
//     description : req.body.description ,
//     price : req.body.price ,
//     sellingPrice : req.body.sellingPrice
// }