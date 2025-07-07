import Castcard from './Castcard';
import './casts.css'

export default function Casts({c}){
    
    return (
        <div className="bot" >
          <h2>Cast</h2>
          <div className="cast-section">
           {c && c.length > 0 ? (
        c.map((cast, index) => (
         <Castcard photo={cast.profile_path} name={cast.original_name} name2={cast.character} index={index}/>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
            
          </div>
           
        </div>
    );
}