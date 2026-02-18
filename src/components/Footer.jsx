import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';



export default function Footer() {

  return (
    <footer className=" bg-black space-y-5 mt-10">
      <div className='flex flex-col justify-center items-center max-w-300 mx-auto py-10 space-y-6'>
        <h6 className='lg:text-[24px] text-white'>Ready to collaborate?</h6>
        <h1 className='lg:text-[100px] text-5xl text-[#088395]'>GET IN TOUCH</h1>
        <h6 className='lg:text-[20px] text-[12px] text-center px-2 text-white/50'>Feel free to reach out for any project inquiries or just to say hello!</h6>
        <div className="grid grid-flow-col gap-5">
          <a href="https://github.com/DishanSaha">
            <Github className='lg:size-10 size-8 text-white/70 hover:text-white' />
          </a>
          <a href="https://www.linkedin.com/in/mredul-saha-5b04b439a">
            <Linkedin className='lg:size-10 size-8 text-white/70 hover:text-white' />
          </a>
          <a href="https://twitter.com/mredulsaha">
            <Twitter className='lg:size-10 size-8 text-white/70 hover:text-white' />
          </a>
        </div>
      </div>
      <div>
        <div className="relative ">
          <div className="absolute bottom-32  w-full border-t border-gray-600"></div>
          <div className='lg:text-[16px] text-[10px]  p-10 flex flex-col justify-center items-center gap-3'>
            <p className='text-white/80'>Copyright © {new Date().getFullYear()} Mredul Saha - All right reserved</p>
            <p className='text-white/80'>Developed with ❤️ using React and Tailwind CSS</p>
          </div>
        </div>
      </div>

    </footer >
  )
}
