import Link from "next/link"
import React from 'react'

const Header = () => {
  return (
    <div className="flex w-[100vw] bg-red-900 items-center">
        <div>
            Daniel Boykov
        </div>
        <div>
            <span>
                Projects
            </span>
            <span>
                Technologies
            </span>
            <span>
                About Me
            </span>
        </div>
        <div className="flex">
            <span>
                <Link
                    target="_blank"
                    passHref={true}
                    href="https://github.com/Aztarok"
                >
                    <img className="w-[3vw]" src="./twitterlogo.png" alt="twitter logo" />
                </Link>
            </span>
            <span>
                <Link
                    target="_blank"
                    passHref={true}
                    href="https://github.com/Aztarok"
                >
                    <img className="w-[3vw]" src="./twitterlogo.png" alt="twitter logo" />
                </Link>
            </span>
            <span>
                <Link
                    target="_blank"
                    passHref={true}
                    href="https://github.com/Aztarok"
                >
                    <img className="w-[3vw]" src="./twitterlogo.png" alt="twitter logo" />
                </Link>
            </span>
        </div>
    </div>
  )
}

export default Header
