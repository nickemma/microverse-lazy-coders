import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons';
import { AiFillInstagram } from 'react-icons';

function Footer() {
  return (
    <footer>
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
        <div className="footer-social">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
        </div>
        <article>
          <h3>links</h3>
          <Link to="/about">About</Link>
          <Link to="/trainers">trainers</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/contact">contact</Link>
        </article>
        <article>
          <h3>links</h3>
          <Link to="/about">About</Link>
          <Link to="/trainers">trainers</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/contact">contact</Link>
        </article>
        <article>
          <h3>links</h3>
          <Link to="/about">About</Link>
          <Link to="/trainers">trainers</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/contact">contact</Link>
        </article>
      </div>
      <div class="credit">
        created by <span>Techie Emma</span> | all rights reserved!
      </div>
    </footer>
  );
}

export default Footer;
