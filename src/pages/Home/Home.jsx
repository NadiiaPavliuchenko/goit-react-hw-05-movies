import { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import getTrending from 'api/getTrending';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const resp = await getTrending();

        setTrending(resp.results);
      } catch (err) {
        console.log('Error fetching trending movies', err);
      }
    };
    getTrendingMovies();
  });
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trending} />
    </>
  );
};

export default Home;
