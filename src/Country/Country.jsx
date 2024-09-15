import { useEffect } from "react";
import { useState } from "react";
import './Country.css';

const Country=({country,handleVisitCountries})=>{
const {name,flags,population,area}=country
const [visited,setVisited]=useState(false);
const handleVisited=()=>{
    setVisited(!visited);
}
    return(
       <div className={`country ${visited && "visited"}`}>
       <h3>Country Name:{name.common}</h3>
       <img style={{height:160,width:320}}src={flags.png} alt=""/>
       <p>Country Population:{population}</p>
       <p>Country Area:{area}</p>
       <button onClick={()=>handleVisitCountries(country)} className="button-visit">Mark As Visit</button>
       &nbsp;&nbsp;
       <button onClick={handleVisited} className="button-visit">{visited? "Visited":"Going"}</button>
       <br />
       {visited && "I have visited this country"}
       </div>
    );
}

export default Country;