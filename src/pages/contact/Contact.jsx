import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import Hero from '../../components/Hero';
import Image from '../../images/img3.jpg';
import './Contact.css';

function Contact() {
  return (
    <>
      <Hero title="Get In Touch" image={Image}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quisquam
          incidunt corporis sapiente veritatis eligendi hic minus ut voluptas
          obcaecati.
        </p>
      </Hero>
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a
              href="mailto:lazycoders@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/lazyCoders"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+2349070851385"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
