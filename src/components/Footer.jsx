import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              CineMate™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/syed-mohammed-ali-raza-abedi-691a06259/"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/Aliraza400"
                rel="noreferrer"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </footer>
  );
};
