import { getTrendingMovies } from 'api/postAPI';
import MovieList from 'components/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';
import { generatePath, Link, useLocation } from 'react-router-dom';
import { PATH } from 'router/Path';

const TreningMovie = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
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
