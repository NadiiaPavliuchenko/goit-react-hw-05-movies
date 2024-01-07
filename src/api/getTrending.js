import api from './api';

const getTrending = async () => {
  const { data } = await api(`3/trending/movie/day?language=en-US`);
  return data;
};

export default getTrending;
