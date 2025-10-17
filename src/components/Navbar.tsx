"use client";
import { motion } from "motion/react";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toogleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-1 px-5 border-bottom border-b-2 border-[var(--main-c)] flex justify-between items-center"
    >
      <Link href="/" className="cursor-pointer">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
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
      <motion.button
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
    </motion.div>
  );
};

export default Navbar;
