
import { useState } from 'react';
import './top.css'
export default function Top({ mainphoto, overview, title, backphoto, rating, release_date }) {

 let [star,setstar]=useState(false);
 let change=()=>{
    setstar(!star);
 }

    return (
        <div className="top">
            <div className="backphoto" ><img src={backphoto}></img></div>
            <div className="mainphoto" >< img src={mainphoto} ></img></div>
            <div className="info">
                <h1>{title}</h1>
                <p><i  className="fa-regular fa-star"></i> {rating} | release on {release_date}</p>
                <button style={{cursor:"pointer"}} onClick={change}>{star?<i class="fa-solid fa-bookmark"></i>:<i className="fa-regular fa-bookmark"></i>} Add to Watchlist</button>
                <br></br><br></br>
                <div>{overview}</div>
            </div>
        </div>
    );
}