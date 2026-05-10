import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2>✈️ Traveloop</h2>

      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Trip</Link>
        <Link to="/trips">My Trips</Link>
        <Link to="/city">City Search</Link>
        <Link to="/activity">Activity</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/packing">Packing</Link>
        <Link to="/login">Login</Link>
        <Link to="/ai-planner">AI Planner</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </motion.div>
  );
}