"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ current }) => {
    const router = useRouter();

    return (
        <div className="flex items-center w-full h-[4.5%]">
            <div className="flex items-center w-[13%] border-light-100 border-[1.5px] border-l-0 border-t-0 bg-red h-[100%] pl-4 rounded-tl-xl">
                daniel-boykov
            </div>
            {current === 1 ? (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/");
                    }}
                    className="flex items-center border-b-[#FEA55F] justify-center px-8 border-light-100 border-[1.5px] border-b-[3px] border-l-0 border-t-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _hello
                </button>
            ) : (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-[1.5px] border-l-0 border-t-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _hello
                </button>
            )}
            {current === 2 ? (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/about");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-b-[#FEA55F] border-b-[3px] border-[1.5px] border-l-0 border-t-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _about-me
                </button>
            ) : (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/about");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-[1.5px] border-l-0 border-t-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _about-me
                </button>
            )}
            {current === 3 ? (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/projects");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-b-[#FEA55F] border-b-[3px] border-[1.5px] border-l-0 border-t-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _project
                </button>
            ) : (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/projects");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-[1.5px] border-l-0 border-t-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _project
                </button>
            )}
            <div className="flex-1 h-full w-auto border-light-100 border-l-0 border-t-0 border-[1.5px]" />
            {current === 4 ? (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/contact");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-b-[#FEA55F] border-b-[3px] border-[1.5px] border-l-0 border-t-0 border-r-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _contact-me
                </button>
            ) : (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/contact");
                    }}
                    className="flex items-center justify-center px-8 border-light-100 border-[1.5px] border-l-0 border-t-0 border-r-0 bg-red h-[100%] hover:text-white hover:bg-[#1a2d3d]"
                >
                    _contact-me
                </button>
            )}
        </div>
    );
};

export default Header;
