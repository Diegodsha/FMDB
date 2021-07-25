// import { ImUser } from 'react-icons/im';
// import { StyledNav } from '../StyledComponents/styles';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#root">
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 justify-content-between">
          <li className="nav-item d-lg-flex">
            <a
              className="nav-link active mx-3 books p-0"
              aria-current="page"
              href="#root"
            >
              Filter
            </a>
            <a className="nav-link categories mx-3 p-0" href="#root">
              ...
            </a>
          </li>
          <li className="nav-item me-4 person-icon mx-3 rounded-circle">
            <a className="nav-link" href="#root">
              {/* <ImUser /> */}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
