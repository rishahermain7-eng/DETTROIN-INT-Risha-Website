import "./Gallery.css";
import { motion } from "framer-motion";

const images = [
  {
    image: "/images/gallery1.jpg",
    title: "Science Laboratory",
  },
  {
    image: "/images/gallery2.jpg",
    title: "Annual Cultural Fest",
  },
  {
    image: "/images/gallery3.jpg",
    title: "Graduation Ceremony",
  },
  {
    image: "/images/campus1.jpg",
    title: "School Campus",
  },
  {
    image: "/images/library.jpg",
    title: "Modern Library",
  },
  {
    image: "/images/sports.jpg",
    title: "Sports Excellence",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">

        <div className="gallery-heading">
          <span>Campus Gallery</span>
          <h2>Moments That Inspire Excellence</h2>
          <p>
            Explore our vibrant campus life, innovative learning spaces,
            cultural celebrations, and memorable student achievements.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((item, index) => (
            <motion.div
              className="gallery-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;