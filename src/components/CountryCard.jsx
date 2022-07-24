import React from 'react'
import { Link} from 'react-router-dom';

export default function CountryCard(props) {
  
  const {country} = props;

  const clickHandler = ()=>{

  }

  return (
    <Link to={`/country/${country.name.common}`} className='card' onClick={clickHandler}>
      <div className="img">
        <img src={country.flags.svg} alt="flags" width="250" />
      </div>
      <div className='info'>
        <h3>{country.name.common}</h3>
        <ul>
          <li><span>Population</span>: {props.country.population}</li>
          <li><span>Region</span>: {props.country.region}</li>
          <li><span>Caption</span>: {props.country.capital}</li>
        </ul>
      </div>
    </Link>
  )
}
