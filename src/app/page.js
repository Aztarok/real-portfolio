
export default function Home() {
    const currentColor = 1;
    return (
        <div className="flex flex-col h-full bg-transparent">
            <div className="flex bg-slate-900 items-center justify-center flex-col w-full h-[40vw] gap-[4vw] text-[2vw] font-semibold" id="home">
                <span className="text-[4vw]">DANIEL BOYKOV</span>
                <span>FRONTEND DEVELOPER & SOFTWARE ENGINEER</span>
            </div>
            <div className="flex bg-transparent 0 items-center justify-center flex-col w-full h-[50vw] " id="about">
                <span className="text-[5vw]">About</span>
                <div className="flex border-[0.2vw] w-[75vw] justify-between h-[50%] bg-white">
                    <div className="flex flex-col gap-[1vw] items-center w-[33%] bg-slate-600">
                        <span className="text-[2vw] mt-[2vw]">
                            Software Development
                        </span>
                        <span className="text-[1.25vw] h-[45%] p-[2vw]">
                            Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript.
                        </span>
                    </div>
                    <div className="flex flex-col gap-[1vw] items-center w-[33.5%] bg-slate-600">
                        <span className="text-[2vw] mt-[2vw]">
                            Frontend Development
                        </span>
                        <span className="text-[1.25vw] h-[45%] p-[2vw]">
                            Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript.
                        </span>
                    </div>
                    <div className="flex flex-col gap-[1vw] items-center w-[33%] bg-slate-600">
                        <span className="text-[2vw] mt-[2vw]">
                            Software Development
                        </span>
                        <span className="text-[1.25vw] h-[45%] p-[2vw]">
                            Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript.
                        </span>
                    </div>
                    
                </div>
            </div>
            <div className="flex bg-transparent 0 items-center justify-center flex-col w-full h-[50vw] " id="tech">
                <span className="text-[5vw]">Technologies</span>
                <div className="flex border-[1.5px] w-[75vw] justify-between h-[50%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
            <div className="flex bg-red-400 0 gap-[2vw] items-center justify-center flex-col w-full h-[100vw] " id="projects">
                <span className="text-[5vw]">Projects</span>
                <div className="flex border-[.5vw] w-[99vw] justify-between h-[35%] bg-blue-500">
                    <div className="flex justify-center flex-wrap overflow-hidden w-[33%] bg-slate-600">
                        <div className="h-[75%] bg-green-500 w-full">
                            <img src="./next.svg" alt="project 1 image" />
                        </div>
                        <div className="h-[15%] bg-slate-700 w-full">hi</div>
                        <div className="h-[15%] bg-slate-500 w-full">hi</div>
                    </div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Project site</div>
                    <div className="flex justify-center w-[33%] h-[15%] bg-slate-600">Github</div>
                </div>
                <div className="flex border-[.5vw] w-[99vw] justify-between h-[35%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
            <div className="flex bg-zinc-900 0 items-center justify-center flex-col w-full h-[50vw] " id="contact">
                <span className="text-[5vw]">Contact</span>
                <div className="flex border-[1.5px] w-[75vw] justify-between h-[50%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
        </div>
    );
}
