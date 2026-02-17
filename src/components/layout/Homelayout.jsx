import Navbar from "../Navbar";
import Hero from "/src/sections/Hero";

export default function Homelayout() {
  return (
    // <div className="bg-[url('src/assets/src/assets/Untitled design (1).png')] bg-blend-lighten z-10">
    //   <div>
    //     <nav>
    //       <Navbar />
    //     </nav>
    //     <section>
    //       <Hero />
    //     </section>
    //   </div >
    // </div>
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
absolute top-0 right-0 
               "
      />
      
      <div className="relative z-50">
        <Navbar />
        <Hero />
      </div>

    </div>

  )
}
