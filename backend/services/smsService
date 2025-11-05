// backend/services/smsService.js
const twilio = require('twilio');
require('dotenv').config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**

 * @param {string} to   Número destino en formato E.164 (p.ej. +57XXXXXXXXXX)
 * @param {string} body Texto del mensaje
 * @returns {{sid:string, status:string}}
 */
async function sendSMS(to, body) {
  const msg = await client.messages.create({
    from: process.env.TWILIO_FROM_NUMBER, // número de Twilio
    to,
    body
  });
  console.log('[SMS] sid:', msg.sid, 'status:', msg.status);
  return { sid: msg.sid, status: msg.status };
}

module.exports = { sendSMS };
