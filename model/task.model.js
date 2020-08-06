const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

mongoose.model("Tasks", taskSchema);


