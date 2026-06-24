import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Contacts = ({ mainMenuOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-2 text-base justify-between px-2 py-2 rounded-md hover:bg-[#005A9C]"
      >
        <div className="flex items-center gap-3  text-white">
          <img
            src="/navbar/address-book.svg"
            alt="address-logo"
            className="w-8 h-8"
          />

          {mainMenuOpen && <span>Contacts</span>}
        </div>

        {mainMenuOpen && (
          <motion.img
            src="/cheveron-down.svg"
            alt="chevron"
            className="w-6 h-6 ml-auto"
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
                to="/contacts/contact-groups"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/users-medical.svg"
                  alt="users-medical-logo"
                />
                <span>Contact Groups</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts/segments"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/layer-group.svg"
                  alt="layer-group-logo"
                />
                <span>Segments</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts/custom-fields"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded-md
                  ${
                    isActive
                      ? "bg-[#005A9C] text-white"
                      : "text-white hover:bg-[#005A9C]"
                  }`
                }
              >
                <img
                  src="/navbar/Contacts/list-check.svg"
                  alt="list-check-logo"
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
