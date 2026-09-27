function Profile() {
  return (
    <main className="page-container">

      <div className="page-header">
        <p>MY ACCOUNT</p>
        <h1>My Profile</h1>
        <span>
          Manage your profile and career information.
        </span>
      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          👩‍💻
        </div>

        <h2>Student Profile</h2>

        <p className="profile-role">
          B.Tech Student
        </p>

        <div className="profile-details">

          <div>
            <strong>Full Name</strong>
            <span>Student Name</span>
          </div>

          <div>
            <strong>Email</strong>
            <span>student@example.com</span>
          </div>

          <div>
            <strong>College</strong>
            <span>Your College</span>
          </div>

          <div>
            <strong>Skills</strong>
            <span>
              Java • Python • React • SQL
            </span>
          </div>

        </div>

        <button className="primary-btn">
          Edit Profile
        </button>

      </div>

    </main>
  );
}

export default Profile;