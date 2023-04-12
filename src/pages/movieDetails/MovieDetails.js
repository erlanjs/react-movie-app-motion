import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Popup from "../../component/ui/popap/Popup";
import useOutsideClick from "../../component/common/useOutsideClick";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [cerdits, setCredits] = useState();
  const [videos, setVideos] = useState({});

  const [isShowTraller, setIsShowTraller] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`
    ).then(({ data }) => {
      console.log(data);
      setMovie(data);
    });

    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`
    ).then(({ data }) => {
      console.log("setMovie", data);
      setCredits(data);
    });

    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`
    ).then(({ data }) => {
      console.log("setMovie", data);
      setVideos(data?.results);
    });
  }, [id]);

  console.log(ref);

  useOutsideClick(ref, () => {
    setIsShowTraller(false);
  });

  return (
    <div>
      <div
        className="w-full  relative"
        style={{
          background: `url(${`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`})  no-repeat center/cover`,
        }}
      >
        <div
          className=" flex gap-3  w-full  bg-zinc-600 py-5 px-3 "
          style={{
            background:
              "linear-gradient(180deg, rgba(217, 217, 217, 0) -203.2%, rgba(93, 110, 123, 0.439779) -39.09%, rgba(35, 59, 79, 0.648183) 38.68%, rgba(15, 41, 64, 0.8) 96.6%)",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
            className="w-[300px] rounded-[50px] 	"
          />
          <div className="text-white mt-3">
            <h2>{movie?.title}</h2>
            <p>{movie?.overview}</p>
            <button
              className="p-3 bg-[#26567E] rounded-sm mt-4"
              onClick={() => setIsShowTraller(true)}
            >
              Watch traller
            </button>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h4>В главных ролях</h4>
        <div className="flex gap-2 max-w-[1000px]  overflow-x-scroll">
          {cerdits?.cast.map(
            (cerdit, index) =>
              cerdit?.profile_path && (
                <Link
                  to={`/credit/${cerdit.id}`}
                  className="border-1 border-solid  rounded-md min-w-[150px] border-black"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w1280/${cerdit?.profile_path}`}
                    width={350}
                    height={500}
                    loading="lazy"
                  />

                  {/* <img
                    src={`https://image.tmdb.org/t/p/w1280/${cerdit?.profile_path}`}
                    className=" w-[350px]"
                  /> */}
                  <p className="px-1">{cerdit?.name}</p>
                </Link>
              )
          )}
        </div>
      </div>
      {isShowTraller && (
        <Popup ref={ref} setClose={() => setIsShowTraller(false)} maxW="100%">
          {videos?.length ? (
            <>
              <p>{videos?.[0]?.name}</p>
              <iframe
                width="950"
                height="534"
                src={`https://www.youtube.com/embed/${videos?.[0]?.key}?autoplay=1`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </>
          ) : (
            <p>Trailler not found :(</p>
          )}
        </Popup>
      )}
    </div>
  );
}
