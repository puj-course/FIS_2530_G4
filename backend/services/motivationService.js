const messages = [
  "¡Hoy es un gran día para avanzar!",
  "Recuerda por qué empezaste 💪",
  "Cada paso cuenta. ¡Sigue así!",
  "Tu esfuerzo está construyendo algo increíble."
];

exports.generateMessage = () => {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
};
