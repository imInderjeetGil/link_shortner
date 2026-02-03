const mongoose = require('mongoose');
console.log("MONGO_URI:", process.env.MONGO_URI);

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB database connected successfully!");
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;