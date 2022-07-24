import React, { useState } from "react";

export default function Country(props) {
  const region = ["Any", "Africa", "Asia", "Americas", "Europe", "Oceania"];
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="country">
      <div className="container">
        <div className="filters">
          <div className="searchber">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="searchSVG"
            >
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
            <input
              type="text"
              name="search"
              placeholder="Search for a Country..."
              onChange={(e) => props.searcht(e.target.value)}
            />
          </div>
          <div className="filterbar" onClick={() => setIsClicked(!isClicked)}>
            {props.region === "Any" ? "Filter by a Region" : props.region}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="downangleSVG"
            >
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>

            {isClicked ? (
              <div className="seltet">
                {" "}
                {region.map((reg) => {
                  return (
                    <div
                      key={reg}
                      className="reg"
                      onClick={() => props.setRegion(reg)}
                    >
                      {reg}
                    </div>
                  );
                })}{" "}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
