import getMovieReviews from 'api/getMovieReviews';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  NoReviewsMessage,
  ReviewAuthor,
  ReviewCard,
  ReviewList,
  ReviewsContainer,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      try {
        const resp = await getMovieReviews(movieId);
        setReviews(resp.results);
      } catch (err) {
        console.log(err);
      }
    };
    if (!movieId) return;
    getReviews();
  }, [movieId]);
  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(review => (
            <ReviewCard key={review.id}>
              <ReviewAuthor>Author: {review.author}</ReviewAuthor>
              <p>{review.content}</p>
            </ReviewCard>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsMessage>We have no reviews</NoReviewsMessage>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
