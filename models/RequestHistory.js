const mongoose = require('mongoose');

const requestHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
    endpoint: String, // API endpoint
    timestamp: { type: Date, default: Date.now }, // Timestamp of the request
    success: Boolean, // Outcome of the request (success or failure)
    city: String, // City requested (for weather endpoint)
    responseData: Object // Response data (for weather endpoint)
});

const RequestHistory = mongoose.model('RequestHistory', requestHistorySchema);

module.exports = RequestHistory;