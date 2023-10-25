const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Connected to database : ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectDB;