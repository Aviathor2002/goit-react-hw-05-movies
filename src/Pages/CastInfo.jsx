import { getMoviesCast } from 'api/postAPI';
import Cast from 'components/Cast';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CastInfo = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('loading');
    const getCast = async id => {
      try {
        const { data } = await getMoviesCast(id);

        setCast(data.cast);
        setStatus('fulfilled');
      } catch {
        setStatus('error');
      } finally {
      }
    };

    getCast(movieId);
  }, [movieId]);

  if (status === 'idle') {
    return <h1> Loading...</h1>;
  }
  if (status === 'error') {
    return <h1> Smth went wrong. Eror 404</h1>;
  }

  return (
    <div>{cast.length !== 0 ? <Cast casts={cast} /> : <p>Loading...</p>}</div>
  );
};

export default CastInfo;
