import "./StudentLife.css";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Sports Excellence",
    image: "/images/sports.jpg",
    text: "Students develop teamwork, discipline and leadership through football, basketball, cricket and athletics."
  },
  {
    title: "Innovation & STEM",
    image: "/images/campus2.jpg",
    text: "Modern laboratories and innovation spaces encourage creativity, robotics and scientific exploration."
  },
  {
    title: "Outdoor Learning",
    image: "/images/campus3.jpg",
    text: "Learning extends beyond classrooms with outdoor activities, nature exploration and experiential education."
  }
];

function StudentLife() {
  return (
    <section className="student-life" id="student-life">
      <div className="container">

        <div className="section-heading">
          <span>Student Life</span>
          <h2>Learning Beyond the Classroom</h2>
          <p>
            Every student is encouraged to discover their passions through sports,
            innovation, leadership and creative experiences.
          </p>
        </div>

        {activities.map((item, index) => (
          <motion.div
            key={index}
            className={`life-row ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="life-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="life-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#">Learn More →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StudentLife;