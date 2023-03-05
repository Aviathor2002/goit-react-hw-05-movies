import { getTrendingMovies } from 'api/postAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { PATH } from 'router/Path';

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
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              {' '}
              <Link
                to={generatePath(PATH.MovieDetails, {
                  movieId: movie.id,
                })}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TreningMovie;
