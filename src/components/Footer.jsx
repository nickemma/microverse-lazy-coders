import { Link } from 'react-router-dom';
import Logo from '../images/logo1.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <article className="test">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            id unde voluptas dolorum laborum, odit saepe nobis soluta pariatur
            sapiente.
          </p>
        </article>
        <article className="test">
          <h3>Menu</h3>
          <Link to="/about">About</Link>
          <Link to="/trainers">trainers</Link>
          <Link to="/contact">contact</Link>
        </article>
        <article className="test">
          <h3>Support</h3>
          <Link to="/about">Partner</Link>
          <Link to="/trainers">Health Insurance</Link>
          <Link to="/">24/7 Support</Link>
          <Link to="/contact">Microverse</Link>
        </article>
        <article className="test">
          <h3>Utility</h3>
          <Link to="/about">Style Guide</Link>
          <Link to="/trainers">License</Link>
          <Link to="/">404 Page</Link>
          <Link to="/contact">Change Log</Link>
          <Link to="/contact">Github</Link>
        </article>
      </div>
      <div className="credit">
        created by
        <span>Techie Emma</span> | all rights reserved!
      </div>
    </footer>
  );
}

export default Footer;
