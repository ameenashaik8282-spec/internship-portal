import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Internships from "./components/internships";
import Applications from "./components/Applications";
import Profile from "./components/Profile";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  // Navigation function
  const navigate = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <Navbar navigate={navigate} />

      {/* Home Page */}
      {page === "home" && (
        <Home navigate={navigate} />
      )}

      {/* Internships Page */}
      {page === "internships" && (
        <Internships navigate={navigate} />
      )}

      {/* Applications Page */}
      {page === "applications" && (
        <Applications navigate={navigate} />
      )}

      {/* Profile Page */}
      {page === "profile" && (
        <Profile navigate={navigate} />
      )}

      {/* Login Page */}
      {page === "login" && (
        <Login navigate={navigate} />
      )}

    </div>
  );
}

export default App;