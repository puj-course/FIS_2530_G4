const Notification = require('../models/Notification');
const motivationService = require('../services/motivationService');

exports.sendMotivation = async (req, res) => {
  const { userId } = req.body;
  const message = motivationService.generateMessage();

  const notification = new Notification({ userId, message, sentAt: new Date() });
  await notification.save();

  res.status(201).json({ success: true, message });
};
