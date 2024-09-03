import { useState, useEffect } from "react";

export const useFetch = (api, queryTerm = "") => {
  const [data, setData] = useState([]);
  //const apiKey = process.env.REACT_APP_API_KEY || "fallback_api_key";
  const url = `https://api.themoviedb.org/3/${api}?api_key=db946efe4593e092da2cf13b4b68131b&query=${queryTerm}&language=en-US&page=1`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  return {
    data,
  };
};

