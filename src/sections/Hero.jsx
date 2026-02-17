
import { Button } from "flowbite-react";
import { FolderKanban } from 'lucide-react';



export default function Hero() {
    return (
        <div className="max-w-[1200px]  flex flex-col justify-center items-center min-h-screen mx-auto lg:space-y-5">
            <h1 className="lg:text-[60px] text-[36px] text-center font-extrabold bg-gradient-to-r from-[#09637E]  to-[#7AB2B2] bg-clip-text text-transparent">Junior Frontend Developer</h1>
            <p className="lg:text-[20px] text-[15px] text-[#7AB2B2] mt-4 lg:px-10 px-6 text-center">Building projects that combine aesthetics, performance, and good coding practices, always focused on creating engaging, accessible digital experiences that truly make a positive impact for users</p>
            <div className='mt-5 lg:flex lg:flex-row lg:space-x-6 flex-col space-y-4'>
                <Button className="w-[155px] h-[40px] gap-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    Projects <FolderKanban className="size-5" />

                </Button>
                <Button outline color="cyan" className='w-[155px] h-[40px] '>Find out more</Button>
            </div>
        </div>
    )
}
