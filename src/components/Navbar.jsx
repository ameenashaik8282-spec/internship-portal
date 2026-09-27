function Navbar({ navigate }) {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => navigate("home")}
      >
        Intern<span>Hub</span>
      </div>

      <div className="nav-links">

        <button onClick={() => navigate("home")}>
          Home
        </button>

        <button onClick={() => navigate("internships")}>
          Internships
        </button>

        <button onClick={() => navigate("applications")}>
          Applications
        </button>

        <button onClick={() => navigate("profile")}>
          Profile
        </button>

      </div>

      <button
        className="login-btn"
        onClick={() => navigate("login")}
      >
        Login
      </button>

    </nav>
  );
}

export default Navbar;