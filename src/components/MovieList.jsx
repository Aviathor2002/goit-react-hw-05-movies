import PropTypes from 'prop-types';
import { generatePath, useLocation } from 'react-router-dom';
import { PATH } from 'router/Path';
import {
  ListMovie,
  MovieImg,
  MovieItem,
  MovieLink,
  Text,
  Title,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ListMovie>
      {movies &&
        movies.map(({ id, title, release_date, poster_path }) => (
          <MovieItem key={id}>
            <MovieLink
              to={generatePath(PATH.MovieDetails, {
                movieId: id,
              })}
              state={{ from: location }}
            >
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              <div>
                <Title>{title}</Title>
                <Text>{release_date}</Text>
              </div>
            </MovieLink>
          </MovieItem>
        ))}
    </ListMovie>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
