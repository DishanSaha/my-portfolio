import React from 'react'
import Marquee from "react-fast-marquee";
import html from "../assets/icons8-html-5-48.png";
import css from "../assets/icons8-css-logo-48.png";
import js from "../assets/icons8-javascript-48.png";
import react from "../assets/icons8-react-40.png";
import node from "../assets/icons8-node-js-48.png";
import express from "../assets/icons8-express-js-48.png";
import mongo from "../assets/icons8-mongo-db-48.png";
import git from "../assets/icons8-git-logo-48.png";
export default function Technologies() {
    return (
        <>
            <div className="lg:max-w-[1200px] mx-auto py-10 lg:mt-20 mt-28 px-2 lg:px-0">
                <h1 className="text-white lg:text-2xl font-bold mb-6">
                    Technologies I Use
                </h1>
                <Marquee pauseOnHover speed={40} gradient={false}>
                    <div className="flex items-center gap-16 lg:gap-26 px-8">
                        <img src={html} alt="HTML" />
                        <img src={css} alt="CSS" />
                        <img src={js} alt="JavaScript" />
                        <img src={react} alt="React" />
                        <img src={node} alt="Node.js" />
                        <img src={express} alt="Express.js" />
                        <img src={mongo} alt="MongoDB" />
                        <img src={git} alt="Git" />
                    </div>
                </Marquee>
            </div>


        </>
    )
}
