import Navbar from "../Navbar/Navbar";
import Footer from "../footer";


import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Top from "../top";
import Casts from "./Casts";

export default function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  
  let [val,setval]=useState([]);

 useEffect(() => {
  if (movie?.casts) {
    setval(movie.casts);
  }
}, [movie]);



  if (!movie) {
    // If no movie data is passed, redirect back or show a message
    return (
      <div className="detail">
        <p>No movie data found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="detail" style={{width:"100%"}}>
        <Top mainphoto={movie.poster_path} overview={movie.overview} title={movie.original_title} backphoto={movie.backdrop_path} rating={movie.vote_average} release_date={movie.release_date} />
        <Casts c={val}/>
    </div>
    <Footer/>
    </>
  );
}
