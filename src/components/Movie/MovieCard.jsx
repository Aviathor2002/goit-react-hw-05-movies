import { Outlet } from 'react-router-dom';
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
  return (
    <MovieCardContainer>
      <MovieCardImage
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt={movieDetail.title}
      />
      <MovieCardContent>
        <MovieCardTitle>Name: {movieDetail.title}</MovieCardTitle>
        <MovieCardDescription>
          User score: {movieDetail.vote_average}
        </MovieCardDescription>

        <MovieCardDescription>{movieDetail.overview}</MovieCardDescription>

        <MovieCardGenres>
          {movieDetail.genres &&
            movieDetail.genres.map(genre => (
              <MovieCardGenre key={genre.id}>{genre.name}</MovieCardGenre>
            ))}
        </MovieCardGenres>
      </MovieCardContent>
    </MovieCardContainer>
  );
};
export default MovieCard;
