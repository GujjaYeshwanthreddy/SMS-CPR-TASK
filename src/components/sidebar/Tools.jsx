import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Tools = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const open = activeDropdown === "tools";
  return (
    <>
      <li
        onClick={() => setActiveDropdown(open ? null : "tools")}
        className="flex items-center gap-3 px-2 text-base cursor-pointer py-2 justify-between rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-2 text-white">
          <img
            src="/navbar/screwdriver-wrench.svg"
            alt="screwdriver-wrench"
            className="w-6 h-6"
          />

          {mainMenuOpen && <span>Tools</span>}
        </div>

        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-6 h-6"
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        )}
      </li>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden ml-2 mt-2 space-y-1 text-base text-white"
          >
            <li>
              <NavLink
                to="/tools/media-library"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/photo-film-music.svg"
                  alt="media-library"
                  className="w-6 h-6"
                />
                <span>Media Library</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tools/url-shortener"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/link.svg"
                  alt="url-shortener"
                  className="w-6 h-6"
                />
                <span>URL Shortener</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tools/message-templates"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/tools/envelope-open-text.svg"
                  alt="message-templates"
                  className="w-6 h-6"
                />
                <span>Message Templates</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tools/integrations"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img src="/navbar/tools/gear-code.svg" alt="integrations" />
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
