import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Academics from "../components/Academics/Academics";
import StudentLife from "../components/StudentLife/StudentLife";
import Gallery from "../components/Gallery/Gallery";
import Principal from "../components/Principal/Principal";
import Testimonials from "../components/Testimonials/Testimonials";
import News from "../components/News/News";
import AdmissionsCTA from "../components/AdmissionsCTA/AdmissionsCTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Academics />
      <StudentLife />
      <Gallery />
      <Principal />
      <Testimonials />
      <News />
      <AdmissionsCTA />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;