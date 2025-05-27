import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Loading from './components/Loading';
import MovieCard from './components/MovieCard';

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
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage("");

        try{
            const response = await fetch(TMDB_API_URL, TMDB_GET_MOVIES_REQUEST_OPTIONS)

            if(!response.ok){
                throw new Error("Failure to fetch Data");
            }

            var data = await response.json();
            if(data == "False"){
                setErrorMessage("Fail to fetch Data");
                setMovieList([]);
                return;
            }
            
            setMovieList(data.results || []);

        }catch(err){
            console.error(`Failure to fetch movies error: ${err}`);
            setfetchError("Error trying fetch movies");
        }finally{
            setIsLoading(false);
        }
    }

    useEffect( () => {
        fetchMovies();
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
                <section className='all-movies'>
                     <h2 className='mt-[45px]'>all movies</h2>
                     {isLoading ? (
                        <Loading/>
                     ) : errorMessage ? (
                        <p className='tet-red-500'>{errorMessage}</p>
                     ) : (
                        <ul>
                            {movieList.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </ul>
                     )}
                </section>

            </div>
        </main>
    )
}

export default App