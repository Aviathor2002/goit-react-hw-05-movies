import { getMovieById } from 'api/postAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
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

  console.log(movieDetail);

  if (status === 'idle' || isLoading) {
    return <h1> Loading...</h1>;
  }
  if (status === 'error') {
    return <h1> Smth went wrong. Eror 404</h1>;
  }

  return (
    <>
      <img
        src={movieDetail.belongs_to_collection.poster_path}
        alt={movieDetail.belongs_to_collection.name}
      />
      <h1>Name: {movieDetail.belongs_to_collection.name}</h1>
      <p>User score:{}</p>
      <h3>Owerview:</h3>
      <p></p>
      <h3>Genres:</h3>
      <p></p>
    </>
  );
};

export default MovieDetails;
