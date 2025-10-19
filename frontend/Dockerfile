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

# Construir la aplicación para producción
RUN npm run build

# Usar servidor web ligero para servir el frontend
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Exponer el puerto por defecto de serve
EXPOSE 3000
