// // context api and use context hook
// // context -> warehouse
// // provider
// // consumer -> useContext()

import { createContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

// const API_KEY = import.meta.env.API_KEY;
// console.log(API_KEY);
// const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`;
// const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=66eb3bde9cca0487f03e78b512b451e4`;
// const API_URL = `http://www.omdbapi.com/?apikey=4159592b`;

export const AppContext = createContext();

const AppProvider = ({children}) => {

    const [query, setQuery] = useState("hacker");
    const { loading, error, movie } = useFetch(`&s=${query}`);

    const value = {
        loading,
        movie,
        error,
        query,
        setQuery,
    };
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;