import api from './api';

const getMovieCast = async movie_id => {
  const { data } = await api(`3/movie/${movie_id}/credits?language=en-US`);
  return data;
};

export default getMovieCast;
