import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   const closeMenu = () => setMenuOpen(false);

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

        <nav className={menuOpen ? "open" : ""}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#academics" onClick={closeMenu}>Academics</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="mobile-apply">Apply Now</button>
        </nav>

        <button className="desktop-apply">Apply Now</button>

        <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />

      </div>
    </header>
  );
}

export default Navbar;