import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

export default function Home() {
    const currentColor = 1;
    return (
        <div className="bg-[#010C15] h-full w-full flex justify-center items-center">
            <div className="bg-[#011627] w-[94.5vw] h-[89.5vh] stroke-light-100 flex flex-col rounded-xl border-[1.5px] text-[#607B96] overflow-hidden">
                <Header current={currentColor} />
                <MainPage />
                <Footer />
            </div>
        </div>
    );
}
