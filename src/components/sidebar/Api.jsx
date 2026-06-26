import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Api = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const location = useLocation();

  const isApiActive = location.pathname.startsWith("/api");
  const open = activeDropdown === "api" || isApiActive;

  return (
    <>
      <motion.li
        layout
        onClick={() =>
          setActiveDropdown(activeDropdown === "api" ? null : "api")
        }
        className={`flex items-center justify-between gap-2 cursor-pointer text-sm px-2 py-2 rounded-lg transition-colors ${
          isApiActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src="/navbar/code.svg"
            alt="code-logo"
            className="w-5 h-5"
          />

          {mainMenuOpen && <span>API</span>}
        </div>

        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-5 h-5"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.li>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: {
                duration: 0.3,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.15,
              },
            }}
            style={{ willChange: "height, opacity" }}
            className="overflow-hidden mt-1 space-y-1 text-sm text-white"
          >
            <li>
              <NavLink
                to="/api/http-api"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/reports/inbox.svg"
                  alt="http-api-logo"
                  className="w-5 h-5"
                />

                <span>HTTP API</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Api;