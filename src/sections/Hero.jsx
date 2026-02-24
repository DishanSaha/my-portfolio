
import { Button } from "flowbite-react";
import { FolderKanban } from 'lucide-react';



export default function Hero() {
    return (
        <div className="lg:min-h-screen h-200 flex flex-col justify-center items-center mx-auto px-4 lg:px-0 space-y-6 lg:space-y-5">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold bg-gradient-to-r from-[#09637E] to-[#7AB2B2] bg-clip-text text-transparent">
                    Junior Frontend Developer
                </h1>
                <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[20px] text-[#8A8A8A] mt-4 px-4 sm:px-6 lg:px-10">
                    Building projects that combine aesthetics, performance, and good coding practices, always focused on creating engaging, accessible digital experiences that truly make a positive impact for users
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mt-5">
                <Button className="w-full sm:w-[155px] h-[40px] gap-3 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800 flex justify-center items-center">
                    Projects <FolderKanban className="ml-2 w-5 h-5" />
                </Button>
                <Button outline color="cyan" className="w-full sm:w-[155px] h-[40px] flex justify-center items-center">
                    Find out more
                </Button>
            </div>
        </div>
    )
}
