# Backend - Te Invito App

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

## Despliegue

- Para DigitalOcean, actualiza las variables en `.env` con los valores de producción.
