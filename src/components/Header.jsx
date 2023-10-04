import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-[5vw] bg-transparent gap-[3vw]">
      <span className="absolute left-[5vw] text-[1.5vw]">Daniel Boykov</span>
      <button className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Home</button>
      <button className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">About</button>
      <button className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Technologies</button>
      <button className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Contact</button>
    </div>
  );
}

export default Header;
