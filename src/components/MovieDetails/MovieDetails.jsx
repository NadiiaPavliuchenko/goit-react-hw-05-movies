import getMovieById from 'api/getMovieById';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalInformation,
  AdditionalInformationContainer,
  GoBackLink,
  MovieCardContainer,
  MovieDetailsContainer,
  MoviePoster,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      try {
        const resp = await getMovieById(movieId);
        setCurrentMovie(resp);
      } catch (err) {
        console.log(err);
      }
    };
    if (!movieId) return;
    getDetails();
  }, [movieId]);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const releaseDate = Date.parse(currentMovie.release_date);
  const releaseYear = new Date(releaseDate).getFullYear();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <GoBackLink to={backLink}>Go back</GoBackLink>
      {currentMovie && (
        <div>
          <MovieCardContainer>
            <MoviePoster
              src={
                currentMovie.poster_path
                  ? [
                      `https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`,
                    ]
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <MovieDetailsContainer>
              <h3>
                {currentMovie.title} ({releaseYear})
              </h3>
              <p>User Score: {currentMovie.vote_average}%</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{currentMovie.overview}</p>
              <p>
                <b>Genres</b>
              </p>
              <ul>
                {currentMovie.genres &&
                  currentMovie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </MovieDetailsContainer>
          </MovieCardContainer>
          <AdditionalInformationContainer>
            <AdditionalInformation>
              Additional Information
            </AdditionalInformation>
            <ul>
              <li>
                <NavLink to="cast" end>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" end>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </AdditionalInformationContainer>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
