const mongoose = require('mongoose')

const allowedValues = ['HIGH', 'MED', 'LOW']; 
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide Name'],
        trim: true,
        maxlength:[20, "Limit Exceeded"]
    },
    priority: allowedValues,
    completed:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',TaskSchema)