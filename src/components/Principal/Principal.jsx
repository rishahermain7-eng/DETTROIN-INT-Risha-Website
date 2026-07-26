import "./Principal.css";
import { motion } from "framer-motion";

function Principal() {
  return (
    <section className="principal">

      <div className="container principal-container">

        <motion.div
          className="principal-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/principal.jpg"
            alt="Principal"
          />
        </motion.div>

        <motion.div
          className="principal-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span>Principal's Message</span>

          <h2>
            Empowering Young Minds To Shape Tomorrow
          </h2>

          <blockquote>
            "Education is not merely about academic achievement; it is about
            nurturing compassionate, confident and responsible individuals who
            are prepared to lead with integrity."
          </blockquote>

          <p>
            At Vasant Valley School, we strive to create a safe, inclusive and
            inspiring environment where every student can discover their
            potential through innovation, creativity and lifelong learning.
          </p>

          <div className="principal-sign">

            <h3>Dr. Ananya Sharma</h3>

            <small>Principal, Vasant Valley School</small>

          </div>

          <button>Read Full Message</button>

        </motion.div>

      </div>

    </section>
  );
}

export default Principal;