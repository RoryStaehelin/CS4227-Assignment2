function Layout({ children }) {
  return (
    <>
      <header className="container" style={{ marginTop: "1rem" }}>
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

      <main className="container" style={{ marginTop: "2rem" }}>
        {children}
      </main>

      <footer className="container" style={{ marginTop: "2rem" }}>
        <p>&copy; 2025 University Research Center</p>
      </footer>
    </>
  );
}

export default Layout;
