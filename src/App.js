import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./app.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Detiel from "./components/Detiel";


function App() {

  const [theme, setTheme] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then((rel) => {
        return rel.json();
      })

      .then((rel) => {
        setCountry(rel);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Router >
      <div className="App">
        <Header setTheme={setTheme} theme={theme} />
          <Switch>
            <Route exact path="/">
                <Content country={country}  /> 
            </Route>
            <Route path="/country/:name">
              <Detiel country={country}/>
            </Route>
          </Switch>
      </div>
    </Router>  
  );
}

export default App;
