import { ReviewItem, ReviewList } from './Reviews.styled';

const Reviews = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewItem key={review.id}>
          <p>{`Author: ${review.author}`}</p>
          <p>{review.content}</p>
        </ReviewItem>
      ))}
    </ReviewList>
  );
};
export default Reviews;
