const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{`Author: ${review.author}`}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
