function Applications({ navigate }) {
  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Software Development Intern",
      status: "Under Review",
      date: "25 Sep 2026",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Web Development Intern",
      status: "Applied",
      date: "22 Sep 2026",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Data Analyst Intern",
      status: "Shortlisted",
      date: "18 Sep 2026",
    },
  ];

  return (
    <main className="applications-page">

      <section className="page-header">
        <p className="hero-tag">📋 YOUR APPLICATIONS</p>

        <h1>
          My <span>Applications</span>
        </h1>

        <p>
          Track the internships you have applied for and check
          your application status.
        </p>
      </section>

      <section className="applications-container">

        {applications.map((application) => (
          <div className="application-card" key={application.id}>

            <div className="company-logo">
              💼
            </div>

            <div className="application-info">
              <h2>{application.role}</h2>

              <h3>{application.company}</h3>

              <p>
                Applied on: {application.date}
              </p>
            </div>

            <div className="application-status">
              <span className={application.status
                .toLowerCase()
                .replace(" ", "-")}
              >
                {application.status}
              </span>
            </div>

          </div>
        ))}

      </section>

      <div className="application-actions">
        <button
          className="primary-btn"
          onClick={() => navigate("internships")}
        >
          Explore More Internships →
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("home")}
        >
          Back to Home
        </button>
      </div>

    </main>
  );
}

export default Applications;