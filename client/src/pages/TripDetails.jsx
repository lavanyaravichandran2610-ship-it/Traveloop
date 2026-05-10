import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    const found = trips.find((t) => t.id == id);
    setTrip(found);
  }, [id]);

  if (!trip) return <h2 className="container">Loading...</h2>;

  const stops = trip.stops || [];

  const totalCost = stops.reduce(
    (sum, s) => sum + s.days * s.costPerDay,
    0
  );

  return (
    <div className="container">
      <h1>✈️ {trip.tripName}</h1>

      <button onClick={() => navigate(`/trip/${id}/cities`)}>
        ➕ Add Cities
      </button>

      <h2>Itinerary</h2>

      {stops.map((s, i) => (
        <div key={i} className="card">
          <h3>{s.name}</h3>
          <p>Days: {s.days}</p>
          <p>₹{s.costPerDay}/day</p>
          <p>Total: ₹{s.days * s.costPerDay}</p>
        </div>
      ))}

      <h2>💰 Total Cost: ₹{totalCost}</h2>
    </div>
  );
}

export default TripDetails;