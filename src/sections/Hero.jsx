import React from 'react'
import { Button } from "flowbite-react";
import { FolderKanban } from 'lucide-react';

export default function Hero() {
    return (
        <div className='text-cnter flex flex-col gap-6 justify-center items-center px-4 max-w-[1200px] mx-auto min-h-[80vh] '>
            <h1 className='bg-gradient-to-r from-white  to-cyan-400 text-transparent bg-clip-text text-[65px] font-semibold text-center' >Junior Frontend <br></br>Developer</h1>
            <p className='text-[20px] text-gray-400 text-center'>Building projects that combine aesthetics, performance, and best coding practices, always focused on creating engaging, accessible digital experiences that truly generate a positive impact for users</p>
            <div className='flex justify-between gap-4'>
                <Button className="h-12 w-35 bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    Projects  <FolderKanban className='mx-2 size-5'/>
                </Button>
                <Button className='h-12 w-35' color="dark" outline>Find out more</Button>
            </div>
        </div>
    )
}
