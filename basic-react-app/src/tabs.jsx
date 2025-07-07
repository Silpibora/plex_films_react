import Button from './buttons';
import { Outlet, Link } from "react-router-dom";
import './tabs.css';
export default function Tabs() {

  
   
  let home=<><i className="fa-solid fa-house color-light"></i> Home</>
  let live_tv=<> <i className="fa-solid fa-tv color-light"></i> Live</>
  let demand=<><i className="fa-regular fa-square-caret-right color-light"></i> Demand</>
  let discover=<><i className="fa-regular fa-compass color-light"></i> discover</>

    return (
        <div className='tabs' >
           <Link to='/'><Button name={home} /></Link> 
            <Button name={live_tv} />
            <Button name={demand} />
            <Button name={discover} />
        </div>
    );
}