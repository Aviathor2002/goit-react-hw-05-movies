import { useLocation, useParams } from 'react-router-dom';
import {
  LinkContainer,
  LinkItemCast,
  LinkItemReview,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  const { movieId } = useParams();
  const location = useLocation();

  return (
    <LinkContainer>
      <LinkItemCast
        to={`/movies/${movieId}/cast`}
        state={{ from: location.state?.from ?? '/movies' }}
        replace
      >
        Cast
      </LinkItemCast>
      <LinkItemReview
        to={`/movies/${movieId}/reviews`}
        state={{ from: location.state?.from ?? '/movies' }}
        replace
      >
        Reviews
      </LinkItemReview>
    </LinkContainer>
  );
};

export default AdditionalInfo;
