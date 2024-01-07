import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWYxOWY5MTExZmE1MDE5MjdlYjU2Mzg4YmE3MjZhZSIsInN1YiI6IjY1OTVkOGExZDdhNzBhMTJmZjY5MzkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kTXi-_yuGDk1w9A9o8nV4Ja99abpdzSpJkiV4VTSkHc',
  },
});

export default api;
