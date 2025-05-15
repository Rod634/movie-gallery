import React, { useState, useEffect } from 'react'
import Search from './components/Search'

const TMDB_API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_GET_MOVIES_REQUEST_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'aplication/json',
        authorization: `Bearer ${TMDB_API_KEY}`
    }
};

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [fetchError, setfetchError] = useState('');

    const fetchMovies = async () => {
        try{
            const response = fetch(TMDB_API_URL, TMDB_GET_MOVIES_REQUEST_OPTIONS)
        }catch(err){
            console.error(`Failure to fetch movies error: ${err}`);
            setfetchError("Error trying fetch movies");
        }
    }

    useEffect( () => {

    }, []);

    return (
        <main>
            <div className='pattern' />
            <div className='wrapper'>
                <img src='hero.png' alt='hero image' />
                <header>
                    <h1>Find <span className='text-gradient'>Movies</span> You'll Love Without the Hassle</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

            </div>
        </main>
    )
}

export default App