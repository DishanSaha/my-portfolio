import React from 'react'
import { Button } from "flowbite-react";



export default function Navbar() {
  return (
    <>
      <div className="navbar lg:max-w-[1200px] fixed top-0 left-0 right-0 lg:backdrop-blur-none lg:bg-transparent backdrop-blur-xs bg-black/10  mx-auto z-50">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>

          </div> */}
          <img src="/src/assets/logo.png" className="lg:w-[77px] lg:h-[80px] h-[60px]" alt="logo" />
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div> */}
        <div className="navbar-end">
          <Button outline color="cyan" className='lg:w-[95px] lg:h-[40px] w-[75px] h-[35px]'>Linkedin</Button>
        </div>
      </div>
    </>
  )
}
