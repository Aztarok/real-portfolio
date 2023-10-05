"use client";
import React, { useRef, useEffect } from 'react';

function Header() {
    const sectionRef = useRef({});

    const updateSectionRefs = () => {
        // Add references to the sections by their IDs
        ["home", "about", "tech", "projects", "contact"].forEach((sectionId) => {
          sectionRef.current[sectionId] = document.getElementById(sectionId);
        });
      };
    
      // Call the function to update sectionRef.current on component mount
      useEffect(() => {
        updateSectionRefs();
      }, []);

    const scrollToSection = (sectionId) => {

        if (sectionRef.current[sectionId]) {
            sectionRef.current[sectionId].scrollIntoView({behavior: "smooth"});
        }
    }
        
    return (
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-[5vw] bg-slate-950 gap-[3vw]">
        <span className="absolute left-[5vw] text-[1.5vw]">Daniel Boykov</span>
        <button onClick={() => scrollToSection("home")} className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Home</button>
        <button onClick={() => scrollToSection("about")} className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">About</button>
        <button onClick={() => scrollToSection("tech")} className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Technologies</button>
        <button onClick={() => scrollToSection("projects")} className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Projects</button>
        <button onClick={() => scrollToSection("contact")} className="duration-300 hover:bg-slate-900 rounded-lg border-[1.5px] border-slate-700 hover:border-white px-[2vw] py-[0.5vw]">Contact</button>
        </div>
    );
}

export default Header;
