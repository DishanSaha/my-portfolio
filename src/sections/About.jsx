import React from 'react'
import Image from '/src/assets/IMG_20260207_191253.jpg.jpeg'
import coverLogo from '/src/assets/MEUS_TRABALHOS-removebg-preview 1.png'

export default function About() {
    return (
        <div className='max-w-300 mx-auto py-10 lg:space-y-10 space-y-4 px-3 mt-10 lg:px-0'>
            <h1 className='text-white font-bold lg:text-5xl text-3xl'>About Me</h1>
            <h2 className='font-bold lg:text-4xl text-2xl text-[#088395]'>Mredul Saha</h2>
            <p className='lg:text-lg text-sm text-blue-200'>A passionate Frontend Developer dedicated to crafting elegant solutions to complex problems. I specialize in building modern web applications with clean code, intuitive interfaces, and robust architectures. My journey in software development is driven by curiosity, continuous learning, and a commitment to delivering exceptional digital experiences.</p>
            <div className="flex flex-col lg:flex-row border border-[#088395]/50 rounded-2xl p-6 gap-6">
                <div className="flex flex-col gap-6 flex-1">

                    <div className="flex flex-col sm:flex-row gap-6">
                        <section className="flex-1 border border-blue-200/50 rounded-2xl p-5 space-y-4 transform transition-transform duration-300 hover:-translate-y-2">
                            <h1 className="text-white font-bold text-2xl">+1 Years</h1>
                            <h3 className="text-white font-bold text-2xl">Experience</h3>
                            <p className="text-blue-300 text-sm">
                                1 year of experience in front-end development, creating interfaces
                            </p>
                        </section>

                        <section className="flex-1 border border-blue-200/50 rounded-2xl p-5 space-y-4 transform transition-transform duration-300 hover:-translate-y-2">
                            <h1 className="text-white font-bold text-2xl">+110 Projects</h1>
                            <h3 className="text-white font-bold text-2xl">Projects</h3>
                            <p className="text-blue-300 text-sm">
                                +110 projects developed for professional improvement
                            </p>
                        </section>
                    </div>

                    <section className="border border-blue-200/50 rounded-2xl p-5 space-y-4 transform transition-transform duration-300 hover:-translate-y-2">
                        <h1 className="text-white font-bold text-2xl">+20</h1>
                        <h3 className="text-white font-bold text-2xl">Certifications</h3>
                        <p className="text-blue-300 text-sm">
                            +20 certifications proving my experience and dedication to my career and future!
                        </p>
                    </section>

                </div>
                <div className="flex-1 h-[250px] sm:h-[350px] lg:h-[400px] relative">
                    <img src={coverLogo} className='bg-[#088395] rounded-full size-15 absolute top-5 right-[-35px] transform -translate-x-1/2 -translate-y-1/2' alt="" />
                    <img
                        src={Image}
                        alt="About Me"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

            </div>


            <div className="flex flex-col border border-[#088395]/50 rounded-2xl p-6 gap-6 space-y-4">
                <h1 className='font-bold lg:text-4xl text-2xl text-[#088395]'>Work Experience</h1>
                <section className='border-l-4 border-[#088395] space-y-4 px-4'>
                    <div className=' space-y-2'>
                        <div className='flex lg:flex-row flex-col justify-between'>
                            <h2 className='text-white font-bold lg:text-xl text-md'>Frontend Developer - Intern</h2>
                            <h6 className='text-blue-200 lg:text-md text-sm'>Jan 2026 - Present</h6>
                        </div>
                        <h5 className='text-[#088395] font-bold text-md'>TS4U - Dhaka, Bangladesh</h5>
                    </div>
                    <div className='flex gap-3'>
                        <span className='bg-[#088395] w-3 h-1 sm:w-3 sm:h-3 rounded-full inline-block mt-2'></span>
                        <p className='text-blue-200 text-sm lg:text-lg'>Built CRM communication modules integrating Facebook, RingCentral, and LinkedIn APIs, consolidating multi-channel messaging into a unified workflow.</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='bg-[#088395] w-3 h-1 sm:w-3 sm:h-3 rounded-full inline-block mt-2'></span>
                        <p className='text-blue-200 text-sm lg:text-lg'>Optimized RESTful APIs and MongoDB schemas, improving query performance and reducing latency.</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='bg-[#088395] w-3 h-1 sm:w-3 sm:h-3 rounded-full inline-block mt-2'></span>
                        <p className='text-blue-200 text-sm lg:text-lg'>Built CRM automation (workflows, autodialer, lead scoring) reducing manual effort by ~40%</p>
                    </div>
                    <div className='flex lg:flex-row flex-wrap gap-4'>
                        <button className="font-bold border border-[#088395]/50 text-[#088395] bg-[#088395]/20 lg:px-2 px-1 lg:py-1 rounded-lg ">
                            React
                        </button>
                        <button className="font-bold border border-[#088395]/50 text-[#088395] bg-[#088395]/20 lg:px-2 px-1 lg:py-1 rounded-lg ">JavaScript</button>
                        <button className="font-bold border border-[#088395]/50 text-[#088395] bg-[#088395]/20 lg:px-2 px-1 lg:py-1 rounded-lg ">Node.js</button>
                        <button className="font-bold border border-[#088395]/50 text-[#088395] bg-[#088395]/20 lg:px-2 px-1 lg:py-1 rounded-lg ">MongoDB</button>
                        <button className="font-bold border border-[#088395]/50 text-[#088395] bg-[#088395]/20 lg:px-2 px-1 lg:py-1 rounded-lg ">Tailwind CSS</button>
                        <button className="font-bold border border-[#088395]/50 text-[#088395] bg-[#088395]/20 lg:px-2 px-1 lg:py-1 rounded-lg ">Git</button>
                    </div>
                </section>
            </div>


            <div className="flex flex-col border border-[#088395]/50 rounded-2xl p-6 gap-6 lg:space-y-4">
                <h1 className='font-bold lg:text-4xl text-xl text-[#088395]'>Education & Achievements</h1>
                <h2 className='text-white font-bold lg:text-2xl text-md'>Education</h2>
                <section className='border-l-4 border-[#088395] space-y-4 px-4'>

                    <h2 className='text-white font-bold lg:text-xl text-md'>B.Sc. in Chemistry</h2>
                    <p className='text-blue-200 lg:text-md text-sm'>National University-Bangladesh | 1992 - 2026</p>
                    <p className='text-blue-200 lg:text-md text-sm'>CGPA: 3.03/4.0</p>
                </section>
                <h1 className='font-bold lg:text-2xl text-lg text-white'>Key Achievements</h1>
                <section className="lg:w-1/2 w-full flex lg:flex-row items-center border border-[#088395]/50 bg-[#088395]/20  rounded-2xl p-4 gap-3 space-y-2">
                    <span className='bg-[#088395] w-3 h-1 sm:w-3 sm:h-3 rounded-full inline-block mt-2'></span>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white text-lg'>Dean's List Recipient</h3>
                        <p className='text-blue-200 text-md'>Maintained academic excellence throughout degree</p>
                    </div>
                </section>

            </div>
        </div>
    )
}
