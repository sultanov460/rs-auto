import React from "react";
import { MdEmail, MdSend } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-start my-10 mx-3.5">
        <Link
          href={""}
          className="flex gap-1.5 items-center text-[var(--main-c)] text-2xl font-medium cursor-pointer hover:font-bold transition-all duration-300"
        >
          <FaPhone /> +994 99 829 99 10
        </Link>
        <Link
          href={""}
          className="flex gap-1.5 items-center text-[var(--main-c)] text-2xl font-medium cursor-pointer hover:font-bold transition-all duration-300"
        >
          <MdEmail /> rscars@gmail.com
        </Link>
      </div>
      <div className="flex flex-col items-center ">
        <form className="flex flex-col gap-5">
          <div className="flex  gap-3">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent p-2.5 text-[var(--main-c)] font-medium rounded-lg border-2 border-[var(--main-c)] placeholder-gray-500 focus:placeholder-[var(--main-c)]/70 outline-none"
            />
            <input
              type="text"
              placeholder="Surname"
              className="bg-transparent p-2.5 text-[var(--main-c)] font-medium rounded-lg border-2 border-[var(--main-c)] placeholder-gray-500 focus:placeholder-[var(--main-c)]/70 outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent p-2.5 text-[var(--main-c)] font-medium rounded-lg border-2 border-[var(--main-c)] placeholder-gray-500 focus:placeholder-[var(--main-c)]/70 outline-none"
          />
          <textarea
            placeholder="Your Message..."
            className="bg-transparent p-2.5 text-[var(--main-c)] font-medium rounded-lg border-2 border-[var(--main-c)] placeholder-gray-500 focus:placeholder-[var(--main-c)]/70 outline-none resize-none"
          ></textarea>
          <button className="flex items-center justify-center font-bold gap-2 bg-[var(--main-c)] border-2 border-[var(--main-c)] px-2.5 py-1.5 text-amber-50 rounded-xl cursor-pointer  hover:bg-transparent hover:text-[var(--main-c)] transition duration-300">
            SEND
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
