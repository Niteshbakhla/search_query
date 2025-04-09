const mongoose = require("mongoose");

exports.connectDB = async () => {
            await mongoose.connect("mongodb://localhost:27017/searchQuery")
                        .then(() => console.log("Database is connected! ✅"))
                        .catch(() => console.log("Database is disconnected! ❌"))

}