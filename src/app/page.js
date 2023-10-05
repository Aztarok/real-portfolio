
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
                <div className="flex border-[1.5px] w-[75vw] justify-between h-[50%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
            <div className="flex bg-transparent 0 items-center justify-center flex-col w-full h-[50vw] " id="tech">
                <span className="text-[5vw]">About</span>
                <div className="flex border-[1.5px] w-[75vw] justify-between h-[50%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
            <div className="flex bg-transparent 0 items-center justify-center flex-col w-full h-[50vw] " id="projects">
                <span className="text-[5vw]">About</span>
                <div className="flex border-[1.5px] w-[75vw] justify-between h-[50%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
            <div className="flex bg-transparent 0 items-center justify-center flex-col w-full h-[50vw] " id="contact">
                <span className="text-[5vw]">About</span>
                <div className="flex border-[1.5px] w-[75vw] justify-between h-[50%] bg-blue-500">
                    <div className="flex justify-center w-[33%] bg-slate-600">Software Development</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Frontend</div>
                    <div className="flex justify-center w-[33%] bg-slate-600">Future</div>
                </div>
            </div>
        </div>
    );
}
