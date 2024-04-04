import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Search = () => {
  const { query, setQuery, error } = useContext(AppContext);
  return (
    <div>
      <section className="search-section">
        <h2>Search your favourite movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" placeholder='search here' value={query} onChange={(e) => setQuery(e.target.value)}/>
          </div>
        </form>
        <div className='card-error'>
          <p>{error.show && error.message}</p>
        </div>
      </section>
    </div>
  )
}

export default Search