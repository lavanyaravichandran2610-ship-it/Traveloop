import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    API.get("/trips").then((res) => setTrips(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Dashboard ✈️</h1>

      <a href="/create">
        <button className="btn">Plan New Trip</button>
      </a>

      {trips.map((t) => (
        <div className="card" key={t._id}>
          <h3>{t.title}</h3>
          <p>{t.destination}</p>
          <p>₹{t.budget}</p>
        </div>
      ))}
    </div>
  );
}