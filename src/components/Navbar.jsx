"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { third, menu, close } from "../assets";
import Hamburger from "hamburger-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [active, setActive] = useState("");
  // const FancyButton = React.forwardRef((props, forwardedRef) => (
  //   <Hamburger size={24} rounded {...props} ref={forwardedRef} />
  // ));

  // FancyButton.displayName = "FancyButton";
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={third}
            alt="logo"
            className="w-9 h-9 rounded-full object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Arjit | Srivastava
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-primary" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`} className="navlink">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Hamburger size={24} rounded />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
