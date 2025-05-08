"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { links } from "../../lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "../../context/active-section-context";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-1.5 border border-white/15  rounded-full bg-white/10 backdrop-blur">
        <ul className="flex">
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx("nav-item", {
                  "text-white": activeSection === link.name,
                })}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-white/15 rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
