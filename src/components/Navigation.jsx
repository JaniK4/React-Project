
const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-3 mb-5">
        <div className="container-fluid">
          <a className="navbar-brand text-warning fw-bold" href="#!">Citralis Bank</a>
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
            <ul className="navbar-nav mx-auto ">
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
            <div className="d-flex justify-content-end">
              <button className="btn btn-warning  rounded-pill shadow-sm px-3 py-2" 
                style={{ cursor: 'default'}}>
                  Balance: 10000
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;