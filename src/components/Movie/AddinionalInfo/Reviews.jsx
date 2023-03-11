import PropTypes from 'prop-types';
import { ReviewItem, ReviewList } from './Reviews.styled';

const Reviews = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <p>{`Author: ${author}`}</p>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ReviewList>
  );
};
export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
