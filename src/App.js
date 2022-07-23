import { useEffect, useState } from "react";
import "./app.scss";
import Country from "./components/Country";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
function App() {
  const [searcht, setSearcht] = useState("");
  const [region, setRegion] = useState("Any");
  const [country, setCountry] = useState([]);
  const [cou, setcou] = useState([]);
  const [theme, setTheme] = useState("");

  const countryfilter = () => {
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
    return s;
  };
  useEffect(() => {
    setcou(countryfilter());
  }, [searcht, region]);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }

    fetch("https://restcountries.com/v3.1/all")
      .then((rel) => {
        return rel.json();
      })

      .then((rel) => {
        setCountry(rel);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Header setTheme={setTheme} theme={theme} />
      <Country searcht={setSearcht} region={region} setRegion={setRegion} />
      <div className="countryList">
        <div className="container">
          {cou.map((e) => {
            return <CountryCard country={e} key={e.name.common} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
