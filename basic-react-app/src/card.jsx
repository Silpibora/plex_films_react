import { useState, useEffect } from "react";
import './card.css'
import { Outlet, Link } from "react-router-dom";

export default function Card() {
  const u = "https://jsonfakery.com/movies/paginated";
  let [cards, setcards] = useState({});
  const fet = async () => {
    try {
      let res = await fetch(u);
      let datas = await res.json();
      setcards(datas.data[0]);
       
    } catch {
      (err) => {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fet();
  }, []);
  let season = (Math.floor(Math.random() * 3) + 1);



  return (

    <div className="card">
      {cards && cards.poster_path ? (
    <Link to="/detail" state={{ movie: cards }}>    
          <div>
            <img src={cards.poster_path} alt={cards.original_title || "Movie Poster"} />
          </div>
          <p>{cards.original_title}</p>
        </Link>
      ) : (
        <> <div>
            <img src="https://filestore.community.support.microsoft.com/api/images/94554b9b-0427-4fc9-83da-79eeca25a76a?upload=true&fud_access=wJJIheezUklbAN2ppeDns8cDNpYs3nCYjgitr%2BfFBh2dqlqMuW7np3F6Utp%2FKMltnRRYFtVjOMO5tpbpW9UyRAwvLeec5emAPixgq9ta07Dgnp2aq5eJbnfd%2FU3qhn54bL5jsg5GuTkv2zpI6ACkdg2E5E3VDo%2B2hQI68%2BYItsStZGYitthVVfyirscuFmPkZMLjT9WIl0MceX60AtWPs8awOqmuw%2FNPBj7AueP5Aep3kQwW%2FD7p4hCfXc9kxIuUMFTLShkvvMmzUlyutR0DRQjLJ2o4APNL2aFGJwWDq%2Bzfvs4US4DJnrdsGhCVqTAIVd%2B30714C0aQ%2BeohEE7lbiHyqOMiPisSG2UANP0EIfJwVUWm5Iz%2FqsaRPa2q9SFnrnIu2WsLnbnUzSfvzAiYmtxXiFtZSopYtymz6dvV6hA%3D" />
          </div>
           
           </>
      )}
    </div>
  );


}