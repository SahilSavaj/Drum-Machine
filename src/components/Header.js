import React from "react";
import logo from "../static/images/drum_logo.png"

export default function Header(){

    return(
        <>
            <div className="header_main bg:white dark:border-slate-50 dark:text-zinc-300
            flex justify-center align-middle items-center text-6xl md:text-6xl lg:text-6xl font-apple-system 
            mx-auto py-5 min-w-max font-normal dark:backdrop-blur-xl dark:bg-zinc-50/10 space-x-5">
                <img className="max-h-20" src={logo} ></img>
                <span>Garba Drum Machine</span>
            </div>
        </>
    );
}