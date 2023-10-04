
export default function Home() {
    const currentColor = 1;
    return (
        <div className="flex flex-col h-full bg-transparent">
            <div className="flex bg-slate-900 items-center justify-center flex-col w-full h-[40vw] gap-[4vw] text-[2vw] font-semibold" id="home">
                <span className="text-[4vw]">DANIEL BOYKOV</span>
                <span>FRONTEND DEVELOPER & SOFTWARE ENGINEER</span>
            </div>
            <div className="flex bg-transparent 0 items-center justify-center flex-col w-full h-[20vw] " id="home">
                <span className="">DANIEL BOYKOV</span>
                <span>FRONTEND DEVELOPER & SOFTWARE ENGINEER</span>
            </div>
        </div>
    );
}
