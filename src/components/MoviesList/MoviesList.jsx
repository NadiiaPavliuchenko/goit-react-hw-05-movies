import { MovieListItem } from './MoviesList.styled';
import { Link } from 'react-router-dom';

const MoviesList = props => {
  return (
    <ul>
      {props.movies.map(film => (
        <MovieListItem key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.title}</Link>
        </MovieListItem>
      ))}
    </ul>
  );
};

export default MoviesList;
