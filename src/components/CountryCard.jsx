import React from 'react'
import Country from './Country';

export default function CountryCard(props) {
  return (
    <div className='card'>
      <div className="img">
        <img src={props.country.flags.svg} alt="flags" width="250" />
      </div>
      <div className='info'>
        <h3>{props.country.name.common}</h3>
        <ul>
          <li><span>Population</span>: {props.country.population}</li>
          <li><span>Region</span>: {props.country.region}</li>
          <li><span>Caption</span>: {props.country.capital}</li>
        </ul>
      </div>
    </div>
  )
}
