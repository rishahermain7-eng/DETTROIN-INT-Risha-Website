import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <span>Get In Touch</span>
          <h2>Contact Us</h2>
        </div>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Address</h3>
                <p>Vasant Valley School, New Delhi, India</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>info@vasantvalley.edu</p>
              </div>
            </div>

          </div>

          <form className="contact-form">

            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Email Address" />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button>Send Message</button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;