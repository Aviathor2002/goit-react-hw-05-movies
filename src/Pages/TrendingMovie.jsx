import { getTrendingMovies } from 'api/postAPI';
import MovieList from 'components/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';

const TreningMovie = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default TreningMovie;
