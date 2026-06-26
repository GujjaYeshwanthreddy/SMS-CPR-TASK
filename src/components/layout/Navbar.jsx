import React from "react";

const Navbar = ({ mainMenuOpen, setMainMenuOpen }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#003F70] h-[68.8px] w-full">
      <nav className="h-full flex items-center justify-between px-6 text-white">
        <div className="flex items-center gap-5">
          <img
            src="/navbar/left-arrow.svg"
            alt="toggle-menu"
            className="cursor-pointer w-7 h-7"
            onClick={() => setMainMenuOpen(!mainMenuOpen)}
          />

          <img
            src="/strategic-logo.svg"
            alt="logo-img"
            className="h-10 w-auto"
          />
        </div>

        <div className="flex items-center gap-10 pr-1">
          <img
            src="/navbar/globe.svg"
            alt="globe-logo"
            className="w-8 h-8"
          />

          <img
            src="/navbar/bell.svg"
            alt="bell-logo"
            className="w-8 h-8"
          />

          <img
            src="/navbar/circle-user.svg"
            alt="circle-user-logo"
            className="w-8 h-8"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;