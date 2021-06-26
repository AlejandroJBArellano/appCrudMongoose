const mongoose = require("mongoose"), Schema = mongoose.Schema;

const task = new Schema({
    title: String, 
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("task", task)