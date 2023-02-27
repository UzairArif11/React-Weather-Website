import React, { useEffect, useState } from "react";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("multan");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=37e07cf50a830d090c8a54a136077c70`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg"> No Data Found </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                {" "}
                Min :{city.temp_min}°Cel | Max : {city.temp_max}° Cel
              </h3>
            </div>
          </div>
        )}

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Tempapp;
