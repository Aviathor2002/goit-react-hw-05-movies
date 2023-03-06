import { getMoviesReviews } from 'api/postAPI';
import Reviews from 'components/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsInfo = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('loading');
    const getReviews = async id => {
      try {
        const { data } = await getMoviesReviews(id);

        setReviews(data.results);
        setStatus('fulfilled');
      } catch {
        setStatus('error');
      } finally {
      }
    };

    getReviews(movieId);
  }, [movieId]);

  if (status === 'idle') {
    return <h1> Loading...</h1>;
  }
  if (status === 'error') {
    return <h1> Smth went wrong. Eror 404</h1>;
  }

  return (
    <div>
      {reviews.length !== 0 ? <Reviews reviews={reviews} /> : <p>Loading...</p>}
    </div>
  );
};

export default ReviewsInfo;
