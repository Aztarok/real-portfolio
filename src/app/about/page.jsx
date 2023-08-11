import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const about = () => {
    const currentColor = 2;
    return (
        <div className="bg-[#010C15] h-full w-full flex justify-center items-center">
            <div className="bg-[#011627] w-[94.5vw] h-[89.5vh] stroke-light-100 flex flex-col rounded-xl border-[1.5px] text-[#607B96] overflow-hidden">
                <Header current={currentColor} />
                <Footer />
            </div>
        </div>
    );
};

export default about;
