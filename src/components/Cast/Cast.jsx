import getMovieCast from 'api/getMovieCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ActorCard,
  ActorImage,
  ActorList,
  ActorName,
  CastContainer,
  CharacterName,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getCast = async () => {
      try {
        const resp = await getMovieCast(movieId);
        setCast(resp.cast);
      } catch (err) {
        console.log(err);
      }
    };

    if (!movieId) return;

    getCast();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <CastContainer>
      <ActorList>
        {cast.length > 0 &&
          cast.map(actor => (
            <ActorCard key={actor.id}>
              <ActorImage
                src={
                  actor.profile_path
                    ? [`https://image.tmdb.org/t/p/w500/${actor.profile_path}`]
                    : defaultImg
                }
                alt="actor"
                width={100}
              />
              <ActorName>{actor.name}</ActorName>
              <CharacterName>Character: {actor.character}</CharacterName>
            </ActorCard>
          ))}
      </ActorList>
    </CastContainer>
  );
};

export default Cast;
