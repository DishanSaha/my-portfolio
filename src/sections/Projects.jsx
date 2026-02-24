import React from 'react'
import { Github, ExternalLink } from 'lucide-react';
import Project1 from "/src/assets/Rectangle 61.png";
import Project2 from "/src/assets/Rectangle 61 (1).png";
import Project3 from "/src/assets/Rectangle 61 (2).png";
import Project4 from "/src/assets/Rectangle 61 (3).png";

export default function Projects() {
    return (
        <>
            <h1 className='text-white lg:text-4xl text-2xl font-bold text-center  lg:mb-5 mt-20 '>Projects</h1>

            <div className='max-w-300 grid grid-cols-1 lg:grid-cols-2 mx-auto py-10 gap-6 px-3 lg:px-0'>
                <div className='  border border-white/10 rounded-3xl space-y-7 pt-7 overflow-hidden'>
                    <img src={Project1} className='w-full transform transition-transform duration-300 hover:scale-105' alt="" />
                    <div className='space-y-7 px-5'>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-white text-lg font-bold'>Project 1</h3>
                                <span className='text-blue-200 text-sm'>2025</span>
                            </div>
                            <p className='text-sm text-blue-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        <p></p>
                        <div className='flex gap-4'>
                            <button className="  text-white bg-gray-800 lg:px-3 lg:py-1 rounded-3xl text-sm">Figma</button>
                            <button className="  text-white bg-gray-800 lg:px-3 lg:py-1 rounded-3xl text-sm">Web development</button>
                            <button className="  text-white bg-gray-800 lg:px-3 lg:py-1 rounded-3xl text-sm">Mobile App</button>
                        </div>
                        <div className='flex items-center gap-4 pb-6'>
                            <ExternalLink className='text-white/50 hover:text-white' />
                            <Github className='text-white/50 hover:text-white' />
                        </div>
                    </div>

                </div>
                <div className='  border border-white/10 rounded-3xl space-y-7 pt-7 overflow-hidden'>
                    <img src={Project2} className='w-full transform transition-transform duration-300 hover:scale-105' alt="" />
                    <div className='space-y-7 px-5'>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-white text-lg font-bold'>Project 2</h3>
                                <span className='text-blue-200 text-sm'>2026</span>
                            </div>
                            <p className='text-sm text-blue-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        <p></p>
                        <div className='flex gap-4'>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">UI/UX</button>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">Design</button>
                        </div>
                        <div className='flex items-center gap-4 pb-6'>
                            <ExternalLink className='text-white/50 hover:text-white' />
                            <Github className='text-white/50 hover:text-white' />
                        </div>
                    </div>

                </div>

                <div className='  border border-white/10 rounded-3xl space-y-7 pt-7 overflow-hidden'>
                    <img src={Project3} className='w-full transform transition-transform duration-300 hover:scale-105' alt="" />
                    <div className='space-y-7 px-5'>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-white text-lg font-bold'>Project 3</h3>
                                <span className='text-blue-200 text-sm'>2026</span>
                            </div>
                            <p className='text-sm text-blue-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        <p></p>
                        <div className='flex gap-4'>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">React</button>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">Next.js</button>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">TypeScript</button>
                        </div>
                        <div className='flex items-center gap-4 pb-6'>
                            <ExternalLink className='text-white/50 hover:text-white' />
                            <Github className='text-white/50 hover:text-white' />
                        </div>
                    </div>

                </div>
                <div className='  border border-white/10 rounded-3xl space-y-7 pt-7 overflow-hidden'>
                    <img src={Project4} className='w-full transform transition-transform duration-300 hover:scale-105' alt="" />
                    <div className='space-y-7 px-5'>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-white text-lg font-bold'>Project 4</h3>
                                <span className='text-blue-200 text-sm'>2026</span>
                            </div>
                            <p className='text-sm text-blue-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        <p></p>
                        <div className='flex gap-4'>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">Node.js</button>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">Express</button>
                            <button className="  text-white bg-gray-800 lg:px-3 px-1 lg:py-1 rounded-3xl text-sm">MongoDB</button>
                        </div>
                        <div className='flex items-center gap-4 pb-6'>
                            <ExternalLink className='text-white/50 hover:text-white' />
                            <Github className='text-white/50 hover:text-white' />
                        </div>
                    </div>

                </div>
            </div>
        </>)
}
