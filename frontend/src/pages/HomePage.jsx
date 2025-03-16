import React from "react";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <article className="contrast">
        <h1>Welcome to the Research Management System</h1>
        <p>
          Please <a href="#/login">login</a> to access the dashboard.
        </p>
      </article>
    </Layout>
  );
}

export default HomePage;
