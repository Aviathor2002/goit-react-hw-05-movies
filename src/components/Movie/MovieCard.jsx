import PropTypes from 'prop-types';
import {
  MovieCardContainer,
  MovieCardContent,
  MovieCardDescription,
  MovieCardGenre,
  MovieCardGenres,
  MovieCardImage,
  MovieCardTitle,
} from './MovieCard.styled';

const MovieCard = ({ movieDetail }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetail;
  return (
    <MovieCardContainer>
      <MovieCardImage
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <MovieCardContent>
        <MovieCardTitle>Name: {title}</MovieCardTitle>
        <MovieCardDescription>User score: {vote_average}</MovieCardDescription>

        <MovieCardDescription>{overview}</MovieCardDescription>

        <MovieCardGenres>
          {genres &&
            genres.map(({ id, name }) => (
              <MovieCardGenre key={id}>{name}</MovieCardGenre>
            ))}
        </MovieCardGenres>
      </MovieCardContent>
    </MovieCardContainer>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  movieDetail: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }),
};
