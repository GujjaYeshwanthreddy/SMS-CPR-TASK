import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Contacts = ({ mainMenuOpen, activeDropdown, setActiveDropdown }) => {
  const location = useLocation();

  const isContactsActive = location.pathname.startsWith("/contacts");
  const open = activeDropdown === "contacts";

  // Opens the Contacts menu automatically when a contacts page is active.
  useEffect(() => {
    if (isContactsActive) {
      setActiveDropdown("contacts");
    }
  }, [isContactsActive, setActiveDropdown]);

  return (
    <>
      <motion.li
        layout
        onClick={() => setActiveDropdown(open ? null : "contacts")}
        className={`flex items-center justify-between gap-2 cursor-pointer text-sm px-2 py-2 rounded-lg transition-colors ${
          isContactsActive
            ? "bg-[#005A9C] text-white"
            : "text-white hover:bg-[#005A9C]"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src="/navbar/address-book.svg"
            alt="address-logo"
            className="w-5 h-5"
          />

          {mainMenuOpen && <span>Contacts</span>}
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
                to="/contacts/contact-groups"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/users-medical.svg"
                  alt="users-medical-logo"
                  className="w-5 h-5"
                />
                <span>Contact Groups</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts/segments"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/layer-group.svg"
                  alt="layer-group-logo"
                  className="w-5 h-5"
                />
                <span>Segments</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts/custom-fields"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-lg ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/list-check.svg"
                  alt="list-check-logo"
                  className="w-5 h-5"
                />
                <span>Custom Fields</span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contacts;