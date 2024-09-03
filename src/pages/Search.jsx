import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api, queryTerm);
  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-8">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Results Found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-6">
        <div className="flex justify-start flex-wrap gap-8">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
