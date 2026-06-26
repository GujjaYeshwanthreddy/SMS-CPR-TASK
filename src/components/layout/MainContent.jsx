import React, { useState } from "react";
import { Outlet } from "react-router-dom";

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
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`fixed left-0 top-[68px] bg-[#006EC2] transition-all duration-300
        ${mainMenuOpen ? "w-[220px]" : "w-[70px]"}
        h-[calc(100vh-68px)]`}
      >
        <div className="flex flex-col justify-between h-full px-3 pt-4 pb-4">
          <div className="flex-1 overflow-y-auto sidebar-scroll">
            <ul className="space-y-1">
              <Home mainMenuOpen={mainMenuOpen} />
              <Dashboard mainMenuOpen={mainMenuOpen} />

              {mainMenuOpen && (
                <h1 className="text-sm text-white mt-1 mb-2 px-3">
                  Communication
                </h1>
              )}

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

              {mainMenuOpen && (
                <h1 className="text-sm text-white mt-1 mb-2 px-3">Manage</h1>
              )}

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

          <div>
            {mainMenuOpen && (
              <h1 className="text-sm text-white mt-1 mb-1 px-2">Personal</h1>
            )}

            <div className="px-2">
              <div className="flex items-center gap-2">
                <img
                  src="/navbar/coins.svg"
                  alt="coins-logo"
                  className="w-5 h-5"
                />

                {mainMenuOpen && (
                  <h1 className="text-sm text-white">Credits</h1>
                )}
              </div>

              {mainMenuOpen && (
                <span className="block text-sm text-white mt-1">
                  USD 86,682.27
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

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
