import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CreditDetails() {
  const { id } = useParams();
  const [person, setPerson] = useState({});

  useEffect(() => {
    getCredit();
  }, [id]);

  function getCredit() {
    axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`
    ).then(({ data }) => {
      setPerson(data);
      console.log("creditId", data);
    });
  }
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${person?.profile_path}`}
          width={500}
        />
      </div>
    </div>
  );
}
