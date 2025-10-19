const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: String,
  userId: String,
  sentAt: Date
});

module.exports = mongoose.model('Notification', notificationSchema);
