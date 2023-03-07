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
  console.log(location);
  return (
    <ListMovie>
      {movies &&
        movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink
              to={generatePath(PATH.MovieDetails, {
                movieId: movie.id,
              })}
              state={{ from: location }}
            >
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <Title>{movie.title}</Title>
                <Text>{movie.release_date}</Text>
              </div>
            </MovieLink>
          </MovieItem>
        ))}
    </ListMovie>
  );
};

export default MovieList;
