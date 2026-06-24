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


const MainContent = ({ mainMenuOpen }) => {
  return (
    <div className="flex flex-1">
      <div
        className={`fixed left-0 top-[60px]
  bg-[#006EC2] transition-all duration-300 overflow-hidden gap-2
  ${mainMenuOpen ? "w-[240px]" : "w-[70px]"}
  h-[calc(100vh-67px)]`}
      >
    <div className="flex flex-col justify-between h-full">
        <div className="flex-1 mt-2 ml-4 mr-4 overflow-hidden">
            <ul className="mt-4 space-y-1">
              <Home mainMenuOpen={mainMenuOpen} />
              <Dashboard mainMenuOpen={mainMenuOpen} />

              {mainMenuOpen && (
                <h1 className="text-base text-white">Communication</h1>
              )}

              <CampaignsDropdown mainMenuOpen={mainMenuOpen} />

              <Tools mainMenuOpen={mainMenuOpen} />
              <Livechat mainMenuOpen={mainMenuOpen} />
              {mainMenuOpen && <h1 className="text-base text-white">Manage</h1>}

              <Numbers mainMenuOpen={mainMenuOpen} />

              <Contacts mainMenuOpen={mainMenuOpen} />

              <Reports mainMenuOpen={mainMenuOpen} />

              <Api mainMenuOpen={mainMenuOpen} />
            </ul>
          </div>
      <div className="px-4 pb-8 mb-1 ">
            {mainMenuOpen && <h1 className="text-base  text-white">Personal</h1>}

            <div className="flex items-start  gap-3 ">
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
        className={`flex-1 min-w-0 transition-all duration-300 pt-[67px] ml-2
  ${mainMenuOpen ? "ml-[240px]" : "ml-[70px]"}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;
