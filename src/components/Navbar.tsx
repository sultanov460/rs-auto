"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toogleMenu() {
    setIsOpen(!isOpen);
  }

  const navLinks = [
    { id: 1, title: "Buy a car", href: "/" },
    { id: 2, title: "Sell a car", href: "/pricing" },
    { id: 3, title: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-1  px-5 border-bottom border-b-2 border-[var(--main-c)] flex justify-between items-center"
    >
      <Link href="/" className="cursor-pointer z-3">
        <motion.img
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          src="logo.svg"
          alt="Logo"
          className="w-25 h-15 md:w-45 md:h-20"
        />
      </Link>
      <motion.div
        initial={{ x: 1500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
        className="md:flex gap-5 hidden items-center"
      >
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="text-[var(--main-c)] uppercase text-xl font-medium hover:font-black transiton duration-300"
          >
            {link.title}
          </Link>
        ))}
        <button className="flex items-center justify-center font-bold gap-2 bg-[var(--main-c)] border-2 border-[var(--main-c)] px-2.5 py-1.5 text-amber-50 rounded-xl cursor-pointer w-25 hover:bg-transparent hover:text-[var(--main-c)] transition duration-300">
          CALL
          <FaPhone size={15} />
        </button>
      </motion.div>
      <motion.button
        className="md:hidden z-3"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        onClick={toogleMenu}
      >
        {isOpen ? (
          <FaTimes
            size={33}
            className="text-[var(--main-c)] cursor-pointer hover:shadow-[0_0_10px_var(--main-c)] transition duration-300"
          />
        ) : (
          <FaBars
            size={33}
            className="text-[var(--main-c)] cursor-pointer hover:shadow-[0_0_10px_var(--main-c)] transition duration-300"
          />
        )}
      </motion.button>

      {
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 h-screen w-full bg-black/50 backdrop-blur-lg backdrop-saturate-100 z-2"
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col items-center gap-5 my-26"
              >
                {navLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.id}
                    className="text-[var(--main-c)] text-2xl font-medium border-b-2 border-[var(--main-c)] py-2 uppercase"
                  >
                    {link.title}
                  </Link>
                ))}
                <button className="flex items-center justify-center font-bold gap-2 bg-[var(--main-c)] border-2 border-[var(--main-c)] px-3 py-2 text-amber-50 rounded-xl cursor-pointer w-30 hover:bg-transparent hover:text-[var(--main-c)] transition duration-300">
                  CALL
                  <FaPhone size={15} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </motion.div>
  );
};

export default Navbar;
