import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = ({ mainMenuOpen }) => {
  return (
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        `flex items-center gap-2 text-sm px-2 py-2 rounded-lg cursor-pointer ${
          isActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`
      }
    >
      <img
        src="/navbar/gauge.svg"
        alt="dashboard-logo"
        className="w-5 h-5"
      />

      {mainMenuOpen && <span>Dashboard</span>}
    </NavLink>
  );
};

export default Dashboard;