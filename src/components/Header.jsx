import React from 'react';

function Header() {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-[5vw] bg-transparent gap-[2vw]">
      <span className="absolute left-[5vw]">Daniel Boykov</span>
      <span>Home</span>
      <span>About</span>
      <span>Technologies</span>
      <span>Contact</span>
    </div>
  );
}

export default Header;
