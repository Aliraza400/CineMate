import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState(null); // Initialize as null
  useTitle(`${data?.original_title || 'Loading...'}`); // Use optional chaining

  const image = data?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : "No Result Found";

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=db946efe4593e092da2cf13b4b68131b&language=en-US&page=1`
      );
      const json = await res.json();
      setData(json);
    }
    fetchMovie();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt={data.title} className="rounded" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold text-center my-4 lg:text-left">
            {data.title}
          </h1>
          <p className="my-4">{data.overview}</p>
          <p className="my-6 flex flex-wrap gap-2">
            {data.genres &&
              data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border shadow-lg rounded border-gray-200 dark:border-gray-600 p-2"
                >
                  {genre.name}
                </span>
              ))}
          </p>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span href="#" className=" text-gray-900 dark:text-white">
              {data.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime: </span>
            <span>{data.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget: </span>
            <span>{data.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue: </span>
            <span>{data.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date: </span>
            <span>{data.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code: </span>
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {data.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
