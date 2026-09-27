import { useState } from "react";

function Login({ navigate }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login successful! Welcome to InternHub 🎉");

    navigate("home");
  };

  return (
    <main className="login-page">

      <div className="login-card">

        <div className="login-icon">
          🔐
        </div>

        <h1>
          Welcome Back
        </h1>

        <p>
          Login to continue to InternHub
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="login-submit"
          >
            Login →
          </button>

        </form>

        <button
          className="back-home"
          onClick={() => navigate("home")}
        >
          ← Back to Home
        </button>

      </div>

    </main>
  );
}

export default Login;