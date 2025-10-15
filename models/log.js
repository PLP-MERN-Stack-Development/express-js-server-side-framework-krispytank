const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    timestamp:{
        type: Date,
        default: Date.now,
        required: true 
    }, 
    method: {
        type: String,
        required: true,
        enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Log', logSchema);