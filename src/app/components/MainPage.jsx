import React from "react";

const MainPage = () => {
    return (
        <div className="flex flex-1">
            <div className="w-[50%]">
                <div className="flex flex-col h-full items-center justify-center">
                    <div className="flex flex-col">
                        <span className="text-white text-2xl">Hello, I am</span>
                        <span className="text-white text-7xl">
                            Daniel Boykov
                        </span>
                        <span className="text-[#4D5BCE] text-4xl">
                            &gt; Front-end Developer
                        </span>
                        <span className="mt-20 text-[#607B96]">
                            // Feel free to try this game
                        </span>
                        <span className="text-[#607B96]">
                            // Check out the code on my github
                        </span>
                        <span>
                            <span className="text-[#4D5BCE]">const </span>
                            <span className="text-[#43D9AD]">
                                githubLink
                            </span>{" "}
                            <span className="text-white">= </span>
                            <a
                                href="https://github.com/Aztarok"
                                className="text-[#E99287] underline underline-offset-4"
                            >
                                "https://github.com/Aztarok"
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[50%] bg-red-100 text-white">weor</div>
        </div>
    );
};

export default MainPage;
