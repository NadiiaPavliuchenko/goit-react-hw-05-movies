import api from './api';

const getMovieById = async movie_id => {
  const { data } = await api(`3/movie/${movie_id}?language=en-US`);
  return data;
};

export default getMovieById;
