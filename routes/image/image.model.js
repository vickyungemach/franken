const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    bookmark: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bookmark',
        default: null
    },
    orientation: {
        type: String,
        enum: ['portrait', 'landscape', 'even']
        default: 'portrait'
    }
});


module.exports = mongoose.model('Image', ImageSchema);