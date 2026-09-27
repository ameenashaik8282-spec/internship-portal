import { useState } from "react";

const internshipData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Microsoft",
    location: "Hyderabad",
    type: "Remote",
    stipend: "₹25,000/month",
    domain: "Web Development",
    icon: "💻"
  },
  {
    id: 2,
    title: "Java Developer Intern",
    company: "TCS",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹20,000/month",
    domain: "Software Development",
    icon: "☕"
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Deloitte",
    location: "Hyderabad",
    type: "Hybrid",
    stipend: "₹22,000/month",
    domain: "Data Science",
    icon: "📊"
  },
  {
    id: 4,
    title: "Python Developer Intern",
    company: "Infosys",
    location: "Pune",
    type: "Remote",
    stipend: "₹18,000/month",
    domain: "Software Development",
    icon: "🐍"
  },
  {
    id: 5,
    title: "Machine Learning Intern",
    company: "Google",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹35,000/month",
    domain: "AI & ML",
    icon: "🤖"
  },
  {
    id: 6,
    title: "UI/UX Design Intern",
    company: "Adobe",
    location: "Noida",
    type: "Remote",
    stipend: "₹20,000/month",
    domain: "Design",
    icon: "🎨"
  },
  {
    id: 7,
    title: "Cloud Computing Intern",
    company: "Amazon",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹30,000/month",
    domain: "Cloud",
    icon: "☁️"
  },
  {
    id: 8,
    title: "Cyber Security Intern",
    company: "Wipro",
    location: "Chennai",
    type: "On-site",
    stipend: "₹18,000/month",
    domain: "Cyber Security",
    icon: "🔐"
  },
  {
    id: 9,
    title: "React Developer Intern",
    company: "Zoho",
    location: "Chennai",
    type: "Remote",
    stipend: "₹20,000/month",
    domain: "Web Development",
    icon: "⚛️"
  },
  {
    id: 10,
    title: "Android Developer Intern",
    company: "Paytm",
    location: "Noida",
    type: "Hybrid",
    stipend: "₹22,000/month",
    domain: "Mobile Development",
    icon: "📱"
  },
  {
    id: 11,
    title: "AI Research Intern",
    company: "IBM",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹28,000/month",
    domain: "AI & ML",
    icon: "🧠"
  },
  {
    id: 12,
    title: "Backend Developer Intern",
    company: "Flipkart",
    location: "Bangalore",
    type: "On-site",
    stipend: "₹25,000/month",
    domain: "Web Development",
    icon: "⚙️"
  },
  {
    id: 13,
    title: "Business Analyst Intern",
    company: "Accenture",
    location: "Hyderabad",
    type: "Hybrid",
    stipend: "₹20,000/month",
    domain: "Business",
    icon: "📈"
  },
  {
    id: 14,
    title: "Cloud Engineer Intern",
    company: "Oracle",
    location: "Hyderabad",
    type: "Remote",
    stipend: "₹27,000/month",
    domain: "Cloud",
    icon: "☁️"
  },
  {
    id: 15,
    title: "Graphic Design Intern",
    company: "Canva",
    location: "Remote",
    type: "Remote",
    stipend: "₹18,000/month",
    domain: "Design",
    icon: "🖌️"
  },
  {
    id: 16,
    title: "Database Intern",
    company: "SAP",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹21,000/month",
    domain: "Database",
    icon: "🗄️"
  },
  {
    id: 17,
    title: "DevOps Intern",
    company: "Cisco",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹26,000/month",
    domain: "DevOps",
    icon: "🚀"
  },
  {
    id: 18,
    title: "Software Testing Intern",
    company: "Capgemini",
    location: "Pune",
    type: "On-site",
    stipend: "₹17,000/month",
    domain: "Testing",
    icon: "🧪"
  },
  {
    id: 19,
    title: "Marketing Intern",
    company: "Swiggy",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹15,000/month",
    domain: "Marketing",
    icon: "📢"
  },
  {
    id: 20,
    title: "Product Management Intern",
    company: "Razorpay",
    location: "Bangalore",
    type: "Hybrid",
    stipend: "₹24,000/month",
    domain: "Product",
    icon: "📦"
  },
  {
    id: 21,
    title: "Full Stack Developer Intern",
    company: "Myntra",
    location: "Bangalore",
    type: "Remote",
    stipend: "₹25,000/month",
    domain: "Web Development",
    icon: "🌐"
  },
  {
    id: 22,
    title: "Data Science Intern",
    company: "NVIDIA",
    location: "Pune",
    type: "Hybrid",
    stipend: "₹32,000/month",
    domain: "Data Science",
    icon: "📊"
  },
  {
    id: 23,
    title: "Blockchain Developer Intern",
    company: "CoinDCX",
    location: "Mumbai",
    type: "Remote",
    stipend: "₹23,000/month",
    domain: "Blockchain",
    icon: "⛓️"
  },
  {
    id: 24,
    title: "HR Intern",
    company: "HCLTech",
    location: "Chennai",
    type: "On-site",
    stipend: "₹14,000/month",
    domain: "Human Resources",
    icon: "👥"
  }
];

function Internships({ applyInternship }) {

  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("All");

  const domains = [
    "All",
    ...new Set(internshipData.map((item) => item.domain))
  ];

  const filteredInternships = internshipData.filter((item) => {

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const matchesDomain =
      domain === "All" || item.domain === domain;

    return matchesSearch && matchesDomain;
  });

  return (
    <main className="internships-page">

      <section className="internships-section">

        <div className="section-heading">

          <p>OPPORTUNITIES</p>

          <h2>Explore Internships</h2>

          <span>
            Find the perfect internship for your career.
          </span>

        </div>


        <div className="filters">

          <input
            type="text"
            placeholder="🔎 Search internships, companies or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          >
            {domains.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>


        <div className="result-count">
          Showing {filteredInternships.length} internships
        </div>


        <div className="internship-grid">

          {filteredInternships.map((internship) => (

            <div
              className="internship-card"
              key={internship.id}
            >

              <div className="company-icon">
                {internship.icon}
              </div>

              <div className="internship-info">

                <h3>
                  {internship.title}
                </h3>

                <p className="company-name">
                  {internship.company}
                </p>

                <div className="internship-details">

                  <span>
                    📍 {internship.location}
                  </span>

                  <span>
                    💼 {internship.type}
                  </span>

                  <span>
                    💰 {internship.stipend}
                  </span>

                </div>

                <div className="internship-bottom">

                  <strong>
                    {internship.domain}
                  </strong>

                  <button
                    onClick={() =>
                      applyInternship(internship)
                    }
                  >
                    Apply Now
                  </button>

                </div>

              </div>

            </div>

          ))}


          {filteredInternships.length === 0 && (

            <div className="no-results">

              <div>😕</div>

              <h3>
                No internships found
              </h3>

              <p>
                Try searching for another company,
                role or location.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Internships;