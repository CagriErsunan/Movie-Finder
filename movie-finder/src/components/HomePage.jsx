import { useEffect, useState } from 'react';
import { Stack, ThemeProvider, Typography, createTheme } from '@mui/material';


import SearchBar from './SearchBar';
import logoIMG from '/assets/logo.svg';
import SideBar from './SideBar';
import Movies from './Movies';


const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
});

const Home = ({selectedMovie, sendDataToApp}) => {
  
  const apiKey = import.meta.env.APP_API_TOKEN;

  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("%20&without_genres=%20"); 
  const [dataFromMovies, setDataFromMovies] = useState("");
  


  const handleChildToParent = (data) => {/* console.log(data); */setDataFromMovies(data); sendDataToApp(data);};
 


/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjNjOWFjNmQ5OWFkY2MwMzRlY2RiM2JkYWYxMTM3NCIsInN1YiI6IjY1MjU1M2NkZDM5OWU2MDEzYTNjZDIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_nJKFcbkcqNvGnAwDyiNnd1NGlsFriMVdnj72ETOA0`,
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);*/

  const makeAPICall = (selectedGenre) => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${apiKey}`
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
}

  useEffect(()=>{ 
      makeAPICall(selectedGenre);
      // setSelectedGenre(null);
  }, [selectedGenre])

  /*
  const handleClick= (selectedGenre) => {
      makeAPICall(selectedGenre);
  }*/

/*useEffect(() => {console.log(movies)}, [movies])*/



  return (
    <ThemeProvider theme={theme}>
      <SideBar selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} selectedMovie={selectedGenre}/>
      <Stack sx={{borderLeft:'1px solid #353434'}}>
        <Stack className="homeBackground" sx={{ height: '360px', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={5}>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <div id="logo-container">
                <img src={logoIMG} alt="logo" />
              </div>
              <Typography id="HeaderHome" variant="h1" color="initial" sx={{ color: '#F90', fontSize: '40px' }}>
                MOVIE FINDER
              </Typography>
            </Stack>
            <SearchBar />
          </Stack>
        </Stack>

        <Movies movies={movies} sendDataToParent={handleChildToParent}/>
      </Stack>
    </ThemeProvider>
  );
};

export default Home;