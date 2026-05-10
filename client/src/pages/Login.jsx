export default function Login() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Login 🔐</h1>
      <input placeholder="Email" style={{ display: "block", margin: 10 }} />
      <input placeholder="Password" type="password" style={{ display: "block", margin: 10 }} />
      <button>Login</button>
    </div>
  );
}