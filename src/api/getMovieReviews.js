import api from './api';

const getMovieReviews = async movie_id => {
  const { data } = await api(
    `3/movie/${movie_id}/reviews?language=en-US&page=1`
  );
  return data;
};

export default getMovieReviews;
