const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.DB_Connect)
    .then(() => console.log('Connected to DB'))
    .catch((error) => console.log(error))
}
module.exports = connectDB;