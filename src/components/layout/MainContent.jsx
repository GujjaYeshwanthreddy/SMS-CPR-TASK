import React from "react";
import CampaignsDropdown from "../sidebar/CampaignsDropdown";
import Tools from "../sidebar/Tools";
import Numbers from "../sidebar/Numbers";
import Contacts from "../sidebar/Contacts";
import Reports from "../sidebar/Reports";
import Api from "../sidebar/Api";
import Home from "../sidebar/Home";
import Dashboard from "../sidebar/Dashboard";
import Livechat from "../sidebar/Livechat";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainContent = ({ mainMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  return (
    <div className="flex flex-1">
      <div
        className={`fixed left-0 top-[67px]
  bg-[#006EC2] transition-all duration-300 overflow-hidden gap-2
  ${mainMenuOpen ? "w-[250px]" : "w-[70px]"}
  h-[calc(100vh-67px)]`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex-1 mt-2 ml-4 mr-4 overflow-y-auto">
            <ul className="mt-4 space-y-1">
              <Home mainMenuOpen={mainMenuOpen} />
              <Dashboard mainMenuOpen={mainMenuOpen} />

              {mainMenuOpen && (
                <h1 className="text-base text-white">Communication</h1>
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
          <div className="px-4 pb-4">
            {mainMenuOpen && (
              <h1 className="text-base  text-white">Personal</h1>
            )}

            <div className="flex items-start  gap-2 ">
              <img
                src="/navbar/coins.svg"
                alt="coins-logo"
                className="w-5 h-5 mt-1"
              />

              {mainMenuOpen && (
                <div className="flex flex-col">
                  <h1 className="text-base text-white">Credits</h1>

                  <h2 className="text-base text-white">USD 86,682.27</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 min-w-0 transition-all duration-300 pt-[67px]
  ${mainMenuOpen ? "ml-[250px]" : "ml-[70px]"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
