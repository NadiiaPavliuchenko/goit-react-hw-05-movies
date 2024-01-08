import { MovieListItem } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = props => {
  const location = useLocation();
  return (
    <ul>
      {props.movies.map(film => (
        <MovieListItem key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </MovieListItem>
      ))}
    </ul>
  );
};

export default MoviesList;
