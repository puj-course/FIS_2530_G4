# Imagen base oficial de Node.js
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto (coincide con el usado en index.js)
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
