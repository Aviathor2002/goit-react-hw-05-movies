import { getMovieById } from 'api/postAPI';
import AdditionalInfo from 'components/Movie/AddinionalInfo/AdditionalInfo';
import MovieCard from 'components/Movie/MovieCard';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BackButton, DetailsContainer } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  const location = useLocation();

  const goBack = location.state?.from ?? '/';
  console.log(goBack);

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
      <DetailsContainer>
        <BackButton to={goBack}>Go back</BackButton>
        <MovieCard movieDetail={movieDetail} />
        <AdditionalInfo />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </DetailsContainer>
    );
  }
};

export default MovieDetails;
