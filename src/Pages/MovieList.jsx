import { generatePath, Link } from 'react-router-dom';
import { PATH } from 'router/Path';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={generatePath(PATH.MovieDetails, {
                movieId: movie.id,
              })}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
