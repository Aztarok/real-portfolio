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
            <body className={`${fira_Code.className} h-[200vh] container-snap`}>
                <div className="h-[5vw] bg-blue-800"></div>
                <Header />
                {children}
            </body>
        </html>
    );
}
