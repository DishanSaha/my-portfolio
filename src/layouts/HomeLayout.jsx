import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'

export default function HomeLayout() {
    return (
        <div className='bg-black'>
            <div className='bg-gradient-to-r from-cyan-900'>
                <header className='sticky top-0 backdrop-blur-lg z-50'>
                    <Navbar />
                </header>
                <section>
                    <Hero />
                </section>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>)
}
