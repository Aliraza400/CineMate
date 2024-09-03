import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
export const MovieList = ({api, title}) => {

  const { data: movies } = useFetch(api)
  useTitle(`${title}`)
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-6">
        <div className="flex md:justify-evenly flex-wrap gap-8">
        {
          movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>

          ))
        }
        </div>
      </section>
    </main>
  );
};