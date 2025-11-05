// backend/controllers/notificationController.js
         
const motivationService = require('../services/motivationService');
const { sendSMS } = require('../services/smsService');            // <— IMPORTANTE
require('dotenv').config();

exports.sendMotivation = async (req, res) => {
  try {
    const { userId, to } = req.body;

    // 1) Genera el texto ¿
    const message = motivationService.generateMessage();

    // 2) Enviar SMS (usa el 'to' del body o el de prueba del .env)
    const phone = to || process.env.SMS_TEST_TO;
    const smsResult = await sendSMS(phone, message);

    // 4) Respuesta
    res.status(201).json({ success: true, message, sms: smsResult });
  } catch (err) {
    console.error('[SMS] error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};
