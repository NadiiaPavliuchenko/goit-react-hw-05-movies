import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewCard = styled.li`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ReviewAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NoReviewsMessage = styled.p`
  color: #777;
  margin-top: 20px;
`;
