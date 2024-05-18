import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjNjOWFjNmQ5OWFkY2MwMzRlY2RiM2JkYWYxMTM3NCIsInN1YiI6IjY1MjU1M2NkZDM5OWU2MDEzYTNjZDIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_nJKFcbkcqNvGnAwDyiNnd1NGlsFriMVdnj72ETOA0",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};