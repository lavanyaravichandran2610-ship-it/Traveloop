import Trip from "../models/Trip.js";

export const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};