import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">

        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
          <div>
            <h2>Vasant Valley</h2>
            <span>School</span>
          </div>
        </div>

        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <button>Apply Now</button>

        <FaBars className="menu-icon"/>

      </div>
    </header>
  );
}

export default Navbar;