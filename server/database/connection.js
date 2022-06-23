const mongoose = require('mongoose');

const db = 'mongodb+srv://FunnyHell:passchb@learning.13f2a.mongodb.net/To-Do-Db?retryWrites=true&w=majority'

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