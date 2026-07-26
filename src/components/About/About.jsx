import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <img src="/images/about.jpg" alt="Campus" />
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h5>About Us</h5>

          <h2>
            Building Future Leaders Through Excellence
          </h2>

          <p>
            Vasant Valley School nurtures students through innovation,
            creativity, leadership, academics, sports and values.
          </p>

          <div className="stats">

            <div>
              <h3>30+</h3>
              <span>Years</span>
            </div>

            <div>
              <h3>2500+</h3>
              <span>Students</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Success</span>
            </div>

          </div>

          <button>Read More</button>

        </motion.div>

      </div>
    </section>
  );
}

export default About;