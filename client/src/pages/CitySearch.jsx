import { useParams, useNavigate } from "react-router-dom";
import { cities } from "../data/cities";
import { useState } from "react";

function CitySearch() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = cities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const addCity = (city) => {
    const days = prompt("Days?");
    const cost = prompt("Cost per day?");

    const trips = JSON.parse(localStorage.getItem("trips")) || [];

    const updated = trips.map((t) => {
      if (t.id == tripId) {
        return {
          ...t,
          stops: [
            ...(t.stops || []),
            {
              name: city.name,
              days: Number(days),
              costPerDay: Number(cost)
            }
          ]
        };
      }
      return t;
    });

    localStorage.setItem("trips", JSON.stringify(updated));
    alert("City Added 🚀");
  };

  return (
    <div className="container">
      <h1>🏙 City Search</h1>

      <input
        placeholder="Search city..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((c, i) => (
        <div key={i} className="card">
          <h3>{c.name}</h3>
          <button onClick={() => addCity(c)}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default CitySearch;