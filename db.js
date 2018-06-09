const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({

    theString: String,
    length: Number,
});

const database = module.exports = mongoose.model('database',ContactSchema);