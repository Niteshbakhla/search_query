const mongoose = require("mongoose");

exports.connectDB = async () => {
            await mongoose.connect(`${process.env.MONGO_URI}/searchQuery`)
                        .then(() => console.log("Database is connected! ✅"))
                        .catch(() => console.log("Database is disconnected! ❌"))

}