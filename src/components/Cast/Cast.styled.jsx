import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ActorList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 0;
  padding: 0;
`;

export const ActorCard = styled.li`
  text-align: center;
  width: 150px;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ActorImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 5px;
`;

export const ActorName = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

export const CharacterName = styled.p`
  margin-top: 5px;
  color: #777;
`;
