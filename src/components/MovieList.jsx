import { generatePath, Link, useLocation } from 'react-router-dom';
import { PATH } from 'router/Path';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
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
        ))}
    </ul>
  );
};

export default MovieList;
