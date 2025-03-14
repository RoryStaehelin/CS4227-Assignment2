import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Research Management System</h1>
      <p>
        Please <Link to="/login">login</Link> to access the dashboard.
      </p>
    </div>
  );
}

export default HomePage;
