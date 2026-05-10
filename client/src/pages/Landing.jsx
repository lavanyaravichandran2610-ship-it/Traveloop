import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>🌍 Traveloop</h1>

      <p style={styles.subtitle}>
        Plan intelligent multi-city travel itineraries in minutes.
      </p>

      <div style={styles.card}>
        <h3>✨ Smart Travel Planning</h3>
        <p>AI-assisted itineraries + budget insights</p>

        <h3>📊 Analytics Dashboard</h3>
        <p>Understand your travel patterns</p>

        <h3>🧭 City Explorer</h3>
        <p>Discover destinations effortlessly</p>
      </div>

      <button
        style={styles.button}
        onClick={() => navigate("/login")}
      >
        Get Started →
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    padding: "20px"
  },
  title: {
    fontSize: "50px",
    marginBottom: "10px"
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "20px"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    width: "300px"
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Landing;