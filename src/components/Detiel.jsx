import React, { useEffect , useState } from "react";
import { useParams,Link } from "react-router-dom";
import Loding from "./Loding";

export default function Detiel() {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  const [isLoding, setIsLoding] = useState(true);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((e)=>{
      return e.json();
    })
    .then((e)=>{
      setCountry(...e)
      setIsLoding(false)
    })
  }, [name]);
  const languages = ()=>{
    let language = '';
    
    for(let elemnt in country.languages){
      language += `${country.languages[elemnt]}, `;
    }
    return language.slice(0,-2);
  }

  return (
    
    <div className="container">
      <Link to='/' className="back">
         <svg xmlns="http://www.w3.org/2000/svg" class="SVG" viewBox="0 0 512 512"><title>Arrow Back</title><path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
            <span>Back</span>
        </Link>
        
    {isLoding ? 
      <Loding />
    :
      <div className="ditelpage">
        <img src={country.flags.svg} alt="flag" width={200} />
        <div className="deitel">
          <h1>{country.name.common}</h1>
          <div className="info" >
            <ul>
              <li>
                <span>Native Name:</span> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
              </li>
              <li>
                <span>Population :</span> {country.population}
              </li>
              <li>
                <span>Region :</span> {country.region}
              </li>
              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>
              <li>
                <span>Capital :</span> {country.capital[0]}
              </li>
            </ul>
            <ul>
              <li>
                <span>Top Level Domain:</span> {country.tld[0]}
              </li>
              <li>
                <span>Currencies:</span> {country.currencies[Object.keys(country.currencies)[0]].name}
              </li>
              <li>
                <span>Languages:</span> {languages()}
              </li>
            </ul>
          </div>
            <div className="sp">
              <span>Border countries:</span>
              <ul>
              {country.borders.map((e)=>{
                  return <li key={e}>{e}</li>
                })}
              </ul>
            </div>
        </div>
      </div>
    }

    </div>
  );
}
