import { getMovieById } from 'api/postAPI';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');

    getMovieById(movieId)
      .then(({ data }) => {
        setMovieDetail(data);
        setStatus('fulfilled');
      })
      .catch(error => setStatus('error'))
      .finally(setIsLoading(false));
  }, [movieId]);

  if (status === 'idle' || isLoading) {
    return <h1> Loading...</h1>;
  }
  if (status === 'error') {
    return <h1> Smth went wrong. Eror 404</h1>;
  }

  if (status === 'fulfilled') {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        <h1>Name: {movieDetail.title}</h1>
        <p>User score:{movieDetail.vote_average}</p>
        <h3>Owerview:</h3>
        <p>{movieDetail.overview}</p>
        <h3>Genres:</h3>
        <p>{movieDetail.genres.map(gener => gener.name)}</p>
        <div>
          <h4>Aditional informatoin</h4>
          <Link to={`/movies/${movieId}/cast`} state={{ from: location }}>
            Cast
          </Link>
          <Link to={`/movies/${movieId}/reviews`} state={{ from: location }}>
            Reviews
          </Link>
        </div>
        <Outlet />
      </>
    );
  }
};

export default MovieDetails;
