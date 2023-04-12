import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../ui/card/Card";

export default function TvShow() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/search/anime?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=1"
    )
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex gap-3 flex-wrap">
      {movie?.results?.map((item, key) => (
        <>
          <Card movie={item} />
        </>
      ))}
    </div>
  );
}
