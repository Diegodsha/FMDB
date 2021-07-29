import FooterStld from '../Styles/Footer.module.css';

const Footer = () => (
  <div className={FooterStld.footer}>
    <a className="navbar-brand text-dark" href="#root">
      FMDd
    </a>
    <small className="text-white gotham-rounded m-auto">
      Fantastic Movie Database Designed and developed by
      <a
        className="
                text-decoration-none
                mx-1
                text-white text-decoration-underline
              "
        href="https://dshagui.com"
      >
        Diego
      </a>
      &copy; All rights reserved.
    </small>
  </div>
);

export default Footer;
