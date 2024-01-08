import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1000px; /* Збільши ширину картки за необхідності */
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
`;

export const AdditionalInformationContainer = styled.div`
  margin: 40px;
`;

export const MovieDetailsContainer = styled.div`
  margin-top: 20px;
`;

export const AdditionalInformation = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  display: inline-block;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;
