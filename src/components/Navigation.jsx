
const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3 mb-5">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#!">Citralis Bank</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto fw-bold">
              <li className="nav-item">
                <a className="nav-link text-warning" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#!">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#!">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;