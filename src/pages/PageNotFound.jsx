import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found / Cinemate'
  }, [])
  return (
    <main>
      <section className="flex flex-col justify-center p-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-white text-slate-800 text-7xl font-bold my-10">
            404, Oops!
          </p>
          <div className="max-w-md">
            <img
              src="./Images/pagenotfound.jpg"
              alt=""
              className="rounded shadow-lg"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 hover:cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">
              Back To CineMate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
