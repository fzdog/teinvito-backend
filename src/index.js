import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import guestRoutes from './routes/guest.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use('/api/invitado', guestRoutes);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
})
.catch((err) => {
  console.error('Error conectando a MongoDB:', err);
});
