import mongoose from 'mongoose'

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI , {
      dbName : "samKala",
    })
    console.log('successfully connected to mongo db ✔✔👍👍')
  } catch (error) {
    console.error(`Error: ${error.message} 🤢🤢`)
  }
}

export default connectToDb
