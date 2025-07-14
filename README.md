# Te Invito Backend

Backend para la aplicación Te Invito - Sistema de gestión de invitados

## Descripción

API REST desarrollada con Node.js, Express y MongoDB para la gestión de invitados y eventos.

## Configuración

1. Copia el archivo `.env` y actualiza los valores según tu entorno:
   - `MONGODB_URI`: URL de conexión a MongoDB
   - `PORT`: Puerto donde correrá el servidor
   - `CORS_ORIGIN`: Origen permitido para CORS (URL del frontend)

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Características

- ✅ API REST con Express.js
- ✅ Base de datos MongoDB con Mongoose
- ✅ CORS configurado
- ✅ Variables de entorno
- ✅ Hotreload con Nodemon

## Despliegue

- Para DigitalOcean, actualiza las variables en `.env` con los valores de producción.
