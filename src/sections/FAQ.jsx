import React, { useState } from 'react'

export default function FAQ() {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-black max-w-200 mt-20 mx-auto py-10 px-4 lg:px-0 '>
            <h2 className='text-white font-bold lg:text-3xl text-xl py-8 text-center'>Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-black text-white border-b border-zinc-600">
                <input type="checkbox" />
                <h4 className="collapse-title font-semibold">How do I create an account?</h4>
                <p className="collapse-content text-sm text-cyan-200">
                    I start by understanding the problem and the user's needs, then move into research, wireframing, design, and finally development with continuous feedback and iteration
                </p>
            </div>
            <div className="collapse collapse-arrow bg-black text-white border-b border-zinc-600">
                <input type="checkbox" />
                <h4 className="collapse-title font-semibold">Which tech stacks do you work with?</h4>
                <p className="collapse-content text-sm text-cyan-200">

                    I primarily work with modern front-end technologies such as React, Tailwind CSS, and UI libraries like shadcn. I also have experience with backend tools and APIs.
                </p>
            </div>
            <div className="collapse collapse-arrow bg-black text-white border-b border-zinc-600">
                <input type="checkbox" />
                <h4 className="collapse-title font-semibold">How many years of experience do you have?</h4>
                <p className="collapse-content text-sm text-cyan-200">

                    I have over one year of hands-on experience working with front-end development, building real-world projects and continuously improving my skills
                </p>
            </div>
            <div className="collapse collapse-arrow bg-black text-white border-b border-zinc-600">
                <input type="checkbox" />
                <h4 className="collapse-title font-semibold">Why did you choose UI/UX design and front-end development?</h4>
                <p className="collapse-content text-sm text-cyan-200">
                    I enjoy transforming ideas into intuitive and visually appealing digital experiences. Front-end development allows me to combine creativity, usability, and engineering
                </p>
            </div>
        </div>
    )
}
