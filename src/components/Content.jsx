import {useState, useEffect} from 'react';
import Country from './Country';
import CountryCard from './CountryCard';



export default function Content(props) {

  const [searcht, setSearcht] = useState("");
  const [region, setRegion] = useState("Any");
  const [cou, setcou] = useState([]);

  const {country } = props;
  

  useEffect(() => {
    let s = country;
    
    if (searcht !== "") {
      s = s.filter((e) => {
        return e.name.common.toLowerCase().includes(searcht) > 0;
      });
    }
    if (region !== "Any") {
      s = s.filter((e) => {
        return region === e.region;
      });
    }
    setcou(s);
  }, [searcht, region, country]);




  return (
    <>
      <Country searcht={setSearcht} region={region} setRegion={setRegion} />
      <div className="countryList">
        <div className="container">
          {cou.map((e) => {
            return <CountryCard country={e} key={e.name.common} />;
          })}
        </div>
      </div>
    </>
  )
}
