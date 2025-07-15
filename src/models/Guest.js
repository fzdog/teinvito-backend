import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
	name: { type: String, required: true },
	token: { type: String, required: true, unique: true },
	confirmed: { type: Boolean, default: false },
	attendees: { type: Number, default: 0 },
	confirmationDate: { type: Date },
	foto: { type: String },
});

export default mongoose.model("Guest", guestSchema);
