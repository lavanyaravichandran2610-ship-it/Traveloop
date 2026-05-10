export default function Signup() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Signup 🧾</h1>
      <input placeholder="Name" style={{ display: "block", margin: 10 }} />
      <input placeholder="Email" style={{ display: "block", margin: 10 }} />
      <input placeholder="Password" type="password" style={{ display: "block", margin: 10 }} />
      <button>Create Account</button>
    </div>
  );
}