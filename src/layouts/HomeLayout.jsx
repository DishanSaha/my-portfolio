import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomeLayout() {
    return (
        <div className='bg-black'>
            <header>
                <Navbar />
            </header>
            <footer>
                <Footer />
            </footer>
        </div>)
}
