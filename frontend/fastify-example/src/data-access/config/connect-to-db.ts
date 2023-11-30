import mongo from 'mongoose'
export const connectDb = () => {
  mongo
    .connect(
      process.env.MONGO_CONNECTION_STRING ||
        'mongodb+srv://guru:5q5rL1gwDfrivQer@cluster0.krmnh0o.mongodb.net/?retryWrites=true&w=majority',
      {}
    )
    .then((res) => {
      console.log('mongodb connected successfully')
    })
    .catch((err) => {
      console.log(err, '-->')
    })
}
