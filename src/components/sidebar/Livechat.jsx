import React from "react";
import { NavLink } from "react-router-dom";

const Livechat = ({ mainMenuOpen }) => {
  return (
    <NavLink
      to="/livechat"
      className={({ isActive }) =>
        `flex items-center gap-2 cursor-pointer px-2 py-2 text-sm rounded-lg ${
          isActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`
      }
    >
      <img
        src="/navbar/comments.svg"
        alt="livechat-logo"
        className="w-5 h-5"
      />

      {mainMenuOpen && <span>Live Chat</span>}
    </NavLink>
  );
};

export default Livechat;