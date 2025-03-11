import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1>RMS</h1>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/projects" style={styles.link}>
            Projects
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/create-project" style={styles.link}>
            Create Project
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
