import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "Made by Daniel Boykov"
};

export default function RootLayout({ children }) {
    const currentColor = 1;
    return (
        <html lang="en">
            <body className={`${fira_Code.className} h-[100vh]`}>
                {children}
            </body>
        </html>
    );
}
