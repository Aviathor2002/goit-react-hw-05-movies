import { getTrendingMovies } from 'api/postAPI';
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
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              {console.log(movie)}
              <Link
                to={generatePath(PATH.MovieDetails, {
                  movieId: movie.id,
                })}
                state={{ from: location }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <h2>{movie.title}</h2>
                  <span>{movie.release_date}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TreningMovie;
