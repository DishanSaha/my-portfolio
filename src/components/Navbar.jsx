import React from 'react'
import Logo from '../assets/logo.png'
import { Button } from "flowbite-react";



export default function Navbar() {
    return (
        <>
            <nav className='flex justify-between max-w-7xl mx-auto items-center  p-2'>
                <img src={Logo} className='lg:size-20 size-20' alt="" />
                <Button color="cyan" outline>Linkedin</Button>
            </nav>
        </>
    )
}
