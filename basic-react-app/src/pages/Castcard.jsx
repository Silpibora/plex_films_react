export default function Castcard({photo,name,name2,index}){
    return (
        <div className="cast-card cast-photo">
            <img src={photo}></img>
            <p className="names_original">{name}</p>
            <p className="names_character">{name2}</p>
        </div>
    );
}