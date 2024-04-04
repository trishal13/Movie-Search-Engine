import React, { useState, useEffect } from "react";

// setting the api link
export const API_URL = `http://www.omdbapi.com/?apikey=4159592b`;

const useFetch = (apiParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data.Search || data);
        setError({ show: "false", msg: "" });
      } else {
        setError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { loading, error, movie };
};

export default useFetch;