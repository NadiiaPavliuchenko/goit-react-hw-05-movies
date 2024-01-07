import api from './api';

const searchMovies = async query => {
  const { data } = await api(
    `3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

export default searchMovies;
