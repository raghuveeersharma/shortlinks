"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { PiLinkSimple } from "react-icons/pi";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function to show or hide the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="w-full bg-slate-800 p-4 flex justify-between items-center text-white relative">
        <div className="text-xl font-semibold flex items-center relative hover:scale-105">
          <div>
            <span className="text-3xl ">Short</span>
            <span className="text-sky-400">Links</span>
          </div>
          <span className="absolute -right-5 top-3">
            <PiLinkSimple />
          </span>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={toggleMenu} // Toggle the mobile menu on click
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-6 px-5 items-center">
          <Link href="/">
            <li className="hover:text-sky-400 cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            {" "}
            <li className="hover:text-sky-400 cursor-pointer">About</li>
          </Link>
          <Link href="/shorten">
            <li className="hover:text-sky-400 cursor-pointer">Shorten</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-sky-400 cursor-pointer">Contact</li>
          </Link>
          <Link href="/contact">
            <button className="hover:text-sky-400 cursor-pointer bg-slate-300 p-1 rounded-md px-2 font-bold hover:scale-105">
              Try Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="cursor-pointer rounded-md font-bold hover:scale-105 text-4xl relative">
              <FaGithubSquare />
              <span className="text-xs absolute right-0 font-normal">
                Github
              </span>
            </button>
          </Link>
        </ul>

        {/* Mobile Navigation Menu (Visible when isMobileMenuOpen is true) */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute left-0 right-0 top-16 bg-slate-800 text-white space-y-4 p-4">
            <Link href="/">
              <li className="hover:text-sky-400 cursor-pointer">Home</li>
            </Link>
            <Link href="/about">
              {" "}
              <li className="hover:text-sky-400 cursor-pointer">About</li>
            </Link>
            <Link href="/shorten">
              <li className="hover:text-sky-400 cursor-pointer">Shorten</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-sky-400 cursor-pointer">Contact</li>
            </Link>
            <Link href="/">
              <button className="hover:text-sky-400 cursor-pointer bg-slate-300 p-1 rounded-md px-2 font-bold hover:scale-105 mr-4">
                Try Now
              </button>
            </Link>
            <Link href="/">
              <button className="cursor-pointer rounded-md font-bold hover:scale-105 text-4xl relative">
                <FaGithubSquare />
                <span className="text-xs absolute right-0 font-normal">
                  Github
                </span>
              </button>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
