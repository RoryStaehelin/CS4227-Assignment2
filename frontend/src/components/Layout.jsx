import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <strong>RMS</strong>
            </li>
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer>
        <p>&copy; 2025 University Research Center</p>
      </footer>
    </>
  );
}

export default Layout;
