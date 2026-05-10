import { motion } from "framer-motion";

export default function CreateTrip() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>Create Trip</h1>

      <input className="input" placeholder="Trip Name" />
      <input className="input" type="date" />
      <input className="input" type="date" />
      <textarea className="input" placeholder="Description" />

      <button className="btn">Save Trip</button>
    </motion.div>
  );
}