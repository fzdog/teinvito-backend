import express from "express";
import Guest from "../models/Guest.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// GET /api/invitado/all
router.get("/all", async (req, res) => {
	try {
		const guests = await Guest.find(
			{},
			"-_id name token confirmed attendees confirmationDate foto"
		);
		res.json(guests);
	} catch (err) {
		res.status(500).json({ message: "Error del servidor." });
	}
});

// POST /api/invitado
router.post("/", async (req, res) => {
	try {
		const { name, foto } = req.body;
		if (!name) {
			return res.status(400).json({ message: "El nombre es requerido." });
		}
		const token = uuidv4();
		const guest = new Guest({ name, token, foto });
		await guest.save();
		res.status(201).json({ message: "Invitado creado.", token });
	} catch (err) {
		res.status(500).json({ message: "Error del servidor." });
	}
});

// GET /api/invitado/:token
router.get("/:token", async (req, res) => {
	try {
		const guest = await Guest.findOne({ token: req.params.token });
		if (!guest) {
			return res
				.status(404)
				.json({ message: "Invitación no encontrada o inválida." });
		}
		res.json({
			name: guest.name,
			confirmed: guest.confirmed,
			attendees: guest.attendees,
			foto: guest.foto,
		});
	} catch (err) {
		res.status(500).json({ message: "Error del servidor." });
	}
});

// POST /api/invitado/:token/confirmar
router.post("/:token/confirmar", async (req, res) => {
	try {
		const { attendees, confirmed } = req.body;
		const guest = await Guest.findOne({ token: req.params.token });
		if (!guest) {
			return res
				.status(404)
				.json({ message: "Invitación no encontrada o inválida." });
		}
		guest.attendees = attendees;
		guest.confirmed = confirmed;
		guest.confirmationDate = new Date();
		await guest.save();
		let message = confirmed
			? "¡Gracias por confirmar tu asistencia!"
			: "😢 Lamentamos que no puedas asistir. 🔄 En todo caso, puedes cambiar de opinión en cualquier momento y volver a este formulario para confirmar. ✅ ";
		res.json({ message, confirmationDate: guest.confirmationDate });
	} catch (err) {
		res.status(500).json({ message: "Error del servidor." });
	}
});

export default router;
