import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Tools = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const location = useLocation();

  const isToolsActive = location.pathname.startsWith("/tools");
  const open = activeDropdown === "tools";

  // Opens the Tools menu automatically when a tools page is active.
  useEffect(() => {
    if (isToolsActive) {
      setActiveDropdown("tools");
    }
  }, [isToolsActive, setActiveDropdown]);

  return (
    <>
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "tools")}
        className={`flex items-center justify-between px-2 py-2 rounded-lg text-sm cursor-pointer transition-colors duration-200 ${
          isToolsActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src="/navbar/screwdriver-wrench.svg"
            alt="screwdriver-wrench"
            className="w-5 h-5"
          />

          {mainMenuOpen && <span>Tools</span>}
        </div>

        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-5 h-5"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.li>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
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
            className="overflow-hidden space-y-1 text-sm text-white"
          >
            <li>
              <NavLink
                to="/tools/media-library"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/photo-film-music.svg"
                  alt="media-library"
                  className="w-5 h-5"
                />
                <span>Media Library</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tools/url-shortener"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/link.svg"
                  alt="url-shortener"
                  className="w-5 h-5"
                />
                <span>URL Shortener</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tools/message-templates"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/envelope-open-text.svg"
                  alt="message-templates"
                  className="w-5 h-5"
                />
                <span>Message Templates</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tools/integrations"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/gear-code.svg"
                  alt="integrations"
                  className="w-5 h-5"
                />
                <span>Integrations</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tools;