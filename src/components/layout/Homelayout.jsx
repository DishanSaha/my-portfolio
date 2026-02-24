import FAQ from "../../sections/FAQ";
import Testimonials from "../../sections/Testimonials";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "/src/sections/Hero";
import Technologies from "../../sections/Technologies";
import About from "../../sections/About";
import Projects from "../../sections/Projects";
import bgLight from "/src/assets/Untitled design (1).png";
import bg from "/src/assets/bg.png";


const reviewsPromise = fetch('/Reviews.json')
  .then(res => res.json())
  .catch(err => console.error('Error fetching reviews:', err));

export default function Homelayout() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Light Background */}
      <img
        src={bgLight}
        alt="Light Background"
        className="absolute top-0 right-0 lg:right-[150px] w-[300px] sm:w-[500px] lg:w-[800px] h-auto blur-xl mix-blend-screen pointer-events-none"
      />

      {/* Dark Background Left */}
      {/* <img
        src={bgDark}
        alt="Dark Background Left"
        className="absolute top-0 left-0 w-[300px] sm:w-[500px] lg:w-[800px] h-200 mix-blend-screen pointer-events-none"
      /> */}

      {/* Dark Background Right */}
      {/* <img
        src={bgDark}
        alt="Dark Background Right"
        className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[800px] h-200 mix-blend-screen pointer-events-none"
      /> */}
      <img src={bg} className="absolute -top-30 w-full h-300 mix-blend-screen" alt="" />

      <section className="relative z-50">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Technologies />
        <About />
        <Projects />
        <Testimonials reviewsPromise={reviewsPromise} />
        <FAQ />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>

  )
}
