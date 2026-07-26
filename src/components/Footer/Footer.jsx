import "./Footer.css";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <img
            src="/images/logo.png"
            alt="Logo"
            className="footer-logo"
          />

          <p>
            Vasant Valley School is committed to nurturing
            confident, compassionate and future-ready learners.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="socials">

            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />

          </div>

        </div>

      </div>

      <div className="copyright">
        © 2026 Vasant Valley School. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;