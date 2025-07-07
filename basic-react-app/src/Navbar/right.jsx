import Button from '../buttons';
import '../Button.css'
import './right.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Right() {

   
let si=<><i class="fa-solid fa-bookmark color-light"></i></>
 
let [start,setstart]=useState(false);

let change =()=>{
setstart(!start);
}

return (
    <>
    <div className='right' >
        <button className='fav' >{si}</button>
        <Button name={"sign in"} />
    </div>
    <div className="more">
        <button onClick={change} className='fav'><i className="fa-solid fa-list-ul"></i></button>
    </div>
    {start?<div className='stabs'  >    
           <Link to='/'>
            <Button name={"home"} /></Link> 
            <Button name={"live_tv"} />
            <Button name={"demand"} />
            <Button name={"discover"} />
            <Button name={"sign in"} />
    </div>:
    <div style={{display:"none"}} >
           <Link to='/'>
            <Button name={"home"} /></Link> 
            <Button name={"live_tv"} />
            <Button name={"demand"} />
            <Button name={"discover"} />
            <Button name={"sign in"} />
    </div>}
     
    </>
);
}