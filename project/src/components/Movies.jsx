import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom';

const imgUrl = "https://via.placeholder.com/200/200";

const Movies = () => {
  const { movie, loading } = useContext(AppContext);
  if (loading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <div>
      <section className='movie-page'>
        <div className='grid grid-4-col'>
          {movie
            ? movie.map((curr) => {
              const { imdbID, Title, Poster } = curr;
              return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className='card'>
                    <div className='card-info'>
                      <h2>{Title.length>13 ? `${Title.substring(0,15)}....` : `${Title}`}</h2>
                      <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                    </div>
                  </div>
                </NavLink>
              );
            })
            : ""
          }
        </div>
      </section>
    </div>
  )
}

export default Movies