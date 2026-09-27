function Home({ navigate }) {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            🚀 BUILD YOUR CAREER
          </p>

          <h1>
            Find Your Dream
            <span> Internship</span>
          </h1>

          <p className="hero-description">
            Discover internships from top companies,
            develop your skills, and take the next step
            toward your dream career.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("internships")}
            >
              Explore Internships →
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("profile")}
            >
              Create Profile
            </button>

          </div>

        </div>

        <div className="hero-card">

          <div className="floating-card">
            💼
            <div>
              <strong>500+</strong>
              <p>Internships</p>
            </div>
          </div>

          <div className="main-illustration">

            <div className="big-emoji">
              🎓
            </div>

            <h3>
              Start Your Career
            </h3>

            <p>
              Find opportunities that match
              your skills and interests.
            </p>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Internships</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Career Domains</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Students</p>
        </div>

      </section>


      {/* WHY INTERNHUB */}

      <section className="why-section">

        <div className="section-heading">
          <p>WHY INTERNHUB</p>

          <h2>
            Everything You Need To Start
          </h2>

          <span>
            Your career journey starts here.
          </span>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div>🔎</div>
            <h3>Find Opportunities</h3>
            <p>
              Search internships according to
              your skills, domain and interests.
            </p>
          </div>

          <div className="why-card">
            <div>🏢</div>
            <h3>Top Companies</h3>
            <p>
              Discover opportunities from
              leading companies and startups.
            </p>
          </div>

          <div className="why-card">
            <div>📈</div>
            <h3>Build Your Career</h3>
            <p>
              Gain real-world experience and
              improve your professional skills.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;