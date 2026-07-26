import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Grade 12 Student",
    text: "The teachers constantly motivate us to think creatively and confidently. Every day is a new learning experience."
  },
  {
    name: "Priya Nair",
    role: "Parent",
    text: "Excellent faculty, outstanding infrastructure and a nurturing environment. My child enjoys coming to school every day."
  },
  {
    name: "Rohan Mehta",
    role: "Alumnus",
    text: "Vasant Valley gave me the confidence and leadership skills that helped me succeed in university."
  }
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <span>Testimonials</span>
          <h2>What Our Community Says</h2>
        </div>

        <div className="testimonial-grid">

          {reviews.map((review, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
            >

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p>"{review.text}"</p>

              <h3>{review.name}</h3>

              <span>{review.role}</span>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;