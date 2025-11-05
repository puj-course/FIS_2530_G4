// Importamos Express y nuestro servicio SMS
import express from "express";
import { sendSMS } from "../services/smsService.js";

const router = express.Router();

// Definimos una ruta POST /notifications/sms
router.post("/sms", async (req, res) => {
  try {
    const { to = process.env.SMS_TEST_TO, body } = req.body;

    if (!body) {
      return res.status(400).json({ error: "Falta el texto del mensaje (body)" });
    }

    // Llama al servicio que realmente envía el mensaje
    const result = await sendSMS(to, body);

    // Si todo sale bien, responde con el SID y el estado del mensaje
    res.json({ success: true, ...result });
  } catch (err) {
    console.error("Error al enviar SMS:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
