import searchMovies from 'api/searchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    const getMovies = async () => {
      const userQuery = searchParams.get('query');
      if (!userQuery) return;
      try {
        const resp = await searchMovies(userQuery);
        setMovies(resp.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [searchParams]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
