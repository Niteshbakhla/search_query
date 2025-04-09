const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
            clothName: {
                        type: String,
            },
            price: {
                        type: String
            },
            category: {
                        type: String,
                        lowercase: true
            }
});

module.exports = mongoose.model("data", dataSchema);