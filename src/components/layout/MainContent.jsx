import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Sidebar menu components
import CampaignsDropdown from "../sidebar/CampaignsDropdown";
import Tools from "../sidebar/Tools";
import Numbers from "../sidebar/Numbers";
import Contacts from "../sidebar/Contacts";
import Reports from "../sidebar/Reports";
import Api from "../sidebar/Api";
import Home from "../sidebar/Home";
import Dashboard from "../sidebar/Dashboard";
import Livechat from "../sidebar/Livechat";

const MainContent = ({ mainMenuOpen }) => {
  // Tracks which sidebar dropdown is currently expanded
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div
        className={`fixed left-0 top-[68px] bg-[#006EC2] transition-all duration-300
        ${mainMenuOpen ? "w-[220px]" : "w-[70px]"}
        h-[calc(100vh-68px)]`}
      >
        {/* Sidebar layout with scrollable menu and fixed bottom section */}
        <div className="flex flex-col justify-between h-full px-3 pt-4 pb-4">

          {/* Scrollable navigation menu */}
          <div className="flex-1 overflow-y-auto sidebar-scroll">
            <ul className="space-y-0.5">

              {/* Main navigation links */}
              <Home mainMenuOpen={mainMenuOpen} />
              <Dashboard mainMenuOpen={mainMenuOpen} />

              {/* Communication section */}
              {mainMenuOpen && (
                <h1 className="text-sm text-white mt-1 mb-2 px-3">
                  Communication
                </h1>
              )}

              {/* Communication menu items */}
              <CampaignsDropdown
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Tools
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Livechat mainMenuOpen={mainMenuOpen} />

              {/* Management section */}
              {mainMenuOpen && (
                <h1 className="text-sm text-white mt-1 mb-2 px-2">
                  Manage
                </h1>
              )}

              {/* Management menu items */}
              <Numbers
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Contacts
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Reports
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              <Api
                mainMenuOpen={mainMenuOpen}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </ul>
          </div>

          {/* Fixed bottom section */}
          <div>
            {mainMenuOpen && (
              <h1 className="text-sm text-white mt-1 mb-2 px-2">
                Personal
              </h1>
            )}

            {/* Credits information */}
            <div className="flex items-start gap-3 px-2">
              <img
                src="/navbar/coins.svg"
                alt="coins-logo"
                className="w-5 h-5 mt-1"
              />

              {mainMenuOpen && (
                <div>
                  <h1 className="text-sm text-white">Credits</h1>

                  <span className="block text-sm text-white mt-1">
                    USD 86,682.27
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main page content rendered by React Router */}
      <div
        className={`flex-1 min-w-0 transition-all duration-300 pt-[68px]
        ${mainMenuOpen ? "ml-[220px]" : "ml-[70px]"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;