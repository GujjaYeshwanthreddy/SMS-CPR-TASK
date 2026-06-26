import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Reports = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const location = useLocation();

  const isReportsActive = location.pathname.startsWith("/reports");
  const open = activeDropdown === "reports";

  // Opens the Reports menu automatically when a reports page is active.
  useEffect(() => {
    if (isReportsActive) {
      setActiveDropdown("reports");
    }
  }, [isReportsActive, setActiveDropdown]);

  return (
    <>
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "reports")}
        className={`flex items-center justify-between gap-2 px-2 py-2 cursor-pointer text-sm rounded-lg transition-colors ${
          isReportsActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src="/navbar/file-chart-column.svg"
            alt="file-chart-logo"
            className="w-5 h-5"
          />

          {mainMenuOpen && <span>Reports</span>}
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
              layout: {
                duration: 0.25,
                ease: "easeInOut",
              },
              height: {
                duration: 0.3,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.15,
              },
            }}
            style={{ willChange: "height, opacity" }}
            className="overflow-hidden  space-y-1 text-sm text-white"
          >
            <li>
              <NavLink
                to="/reports/campaign-status"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/reports/box-archive.svg"
                  alt="campaign-status-logo"
                  className="w-5 h-5"
                />
                <span>Campaign Status</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reports/inbox"
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
                  alt="inbox-logo"
                  className="w-5 h-5"
                />
                <span>Inbox</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Reports;