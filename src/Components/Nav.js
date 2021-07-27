const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand text-dark" href="#root">
        FMDd
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <form className="d-flex my-2 my-lg-0" style={{ width: '70%' }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning" type="button">
            Search
          </button>
        </form>
        <ul className="navbar-nav justify-content-between">
          <li className="nav-item d-lg-flex my-2 my-lg-0">
            <a
              className="nav-link active mx-3 books p-0 fw-bold"
              aria-current="page"
              href="#root"
            >
              FMDbPro
            </a>
          </li>
          <span className="divider d-none d-lg-block" style={{ width: '1px', border: '1px solid gray' }} />
          <li className="my-2 my-lg-0">
            <a className="nav-link categories mx-3 p-0 text-white" href="#root">
              Watchlist
            </a>
          </li>
          <li>
            <a className="nav-link categories ms-3 p-0 text-white" href="#root">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
