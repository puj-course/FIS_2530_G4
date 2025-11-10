// sendSMS.js
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const FROM = process.env.FROM;
const TO = process.env.TO;
const message = "¡Bienvenido a GreenRoute! Tu registro se completó correctamente 🚀";

client.messages
  .create({
    body: message,
    from: FROM,
    to: TO,
  })
  .then(msg => console.log("✅ Mensaje enviado:", msg.sid))
  .catch(err => console.error("❌ Error enviando SMS:", err.message));
