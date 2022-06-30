const mongoose = require('mongoose');

const db = process.env.server

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB