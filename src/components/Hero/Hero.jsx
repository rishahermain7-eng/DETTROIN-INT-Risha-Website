import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: "url('/images/hero.jpg')"
      }}
    >
      <div className="overlay"></div>

      <div className="container hero-content">

        <motion.h4
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:.6}}
        >
          Welcome To
        </motion.h4>

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
        >
          Vasant Valley School
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.5}}
        >
          Inspiring excellence through innovation,
          creativity and holistic education.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.8}}
        >
          <button>Journey With Us</button>
          <button className="secondary">Explore Campus</button>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;