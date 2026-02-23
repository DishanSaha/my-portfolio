import { useEffect } from "react";
import FAQ from "../../sections/FAQ";
import Testimonials from "../../sections/Testimonials";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Hero from "/src/sections/Hero";
import Technologies from "../../sections/Technologies";
import About from "../../sections/About";



const reviewsPromise = fetch('/Reviews.json')
  .then(res => res.json())
  .catch(err => console.error('Error fetching reviews:', err));

export default function Homelayout() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <img
        src="/src/assets/Untitled design (1).png"
        alt=""
        className="absolute top-0 lg:right-[150px]
              size-[800px]
               blur-xl 
               mix-blend-screen"
      />
      <img
        src="/src/assets/bg.png"
        alt=""
        className="absolute
              size-[800px]
               mix-blend-screen
absolute top-0 left-0 
               "
      />
      <img
        src="/src/assets/bg.png"
        alt=""
        className="absolute
              size-[800px]
               mix-blend-screen
absolute 
top-0
 right-0"
      />

      <section className="relative z-50">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Technologies />
        <About />
        <Testimonials reviewsPromise={reviewsPromise} />
        <FAQ />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>

  )
}
