import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "Made by Daniel Boykov"
};

export default function RootLayout({ children }) {
    const currentColor = 1;
    return (
        <html lang="en">
            <body className={`${fira_Code.className} h-[200vw] bg-slate-900 container-snap`}>
                <div className="h-[5vw] bg-transparent"></div>
                <Header />
                {children}
            </body>
        </html>
    );
}
