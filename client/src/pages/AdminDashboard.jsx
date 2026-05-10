import { useEffect, useState } from "react";

function AdminDashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(JSON.parse(localStorage.getItem("trips")) || []);
  }, []);

  const allCities = trips.flatMap((t) => t.stops || []);

  const totalCost = allCities.reduce(
    (sum, s) => sum + s.days * s.costPerDay,
    0
  );

  return (
    <div className="container">
      <h1>📊 Admin Dashboard</h1>

      <div className="card">
        <h2>{trips.length}</h2>
        <p>Total Trips</p>
      </div>

      <div className="card">
        <h2>{allCities.length}</h2>
        <p>Total Cities</p>
      </div>

      <div className="card">
        <h2>₹{totalCost}</h2>
        <p>Total Budget</p>
      </div>
    </div>
  );
}

export default AdminDashboard;