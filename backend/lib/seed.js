
import ProductModel from '../models/ProductModel.js'
import products from '../data/products.js'
import mongoose from 'mongoose'



const main = async () => {
  try {

    await mongoose.connect("mongodb+srv://samkarimi727:Sam.jester1@cluster.9pkuc9h.mongodb.net/?retryWrites=true&w=majority&appName=myShop" , {
      dbName : "samKala",
    })

    await ProductModel.deleteMany()
    const createdProducts = await ProductModel.insertMany(products)

    console.log({
      createdProducts,
      message: 'Seeded database successfully',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()