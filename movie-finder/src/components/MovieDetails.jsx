import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import movieFinder from '/assets/movieFinder.svg';
import addIcon from '/assets/book-add.svg';
import { Stack, ThemeProvider, createTheme, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
const apiKey = import.meta.env.APP_API_TOKEN;

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
});

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${apiKey}`,
    }
};


function MovieDetails({listItemsToApp,  array, handleAddClick, handleRemoveClick, handleClearClick }) {


  const handleClick = (a) => {
    dispatch(addValue(a));
    sendDataToParent(array);
  };

const sendDataToParent = (array) =>{
  listItemsToApp(array);
}

  /*

  const handleClick = (a) =>{
      listItemsToApp(a);
  };
  
  */

  const paramData= useParams();

  const movieID = JSON.stringify(paramData).slice(14, );
  /*console.log(movieID);*/
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, options)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        // console.log(movie);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const movieStats = [movie.poster_path, movie.title, movie.vote_average];


  // console.log(array);



  return (
  <Box> 
  <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, display:'block' }}>
      <AppBar sx={{backgroundColor:'#000000'}} position="static">
        <Button href={`/`} sx={{width:'fit-content'}}>
        <Box id='siteFullIcon'><img  src={movieFinder} alt='full site icon'/></Box>
        </Button>
      </AppBar>
    </Box>

    <Stack  id='movieDetailBackground' direction={'column'} sx={{height:'80vh', width:'100vw', border: '1px solid #33363F', backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`, alignItems:'center', justifyContent:'center'}}>
      <Stack className='underBack' sx={{height:'100%', width:'100%', alignItems:'start', justifyContent:'center' }}>
        <Stack   spacing={4} direction={'row'} sx={{pl:'25%'}} >
          <Box id='movieFrame' sx={{height:'300px', width:'200px', border:'#F90 2px solid', borderRadius:'20px'}}>
            <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt='movieImg'/>
          </Box>
          <Stack spacing={2} sx={{pt:'10px'}}>
            <Typography variant="h4" color="#FF9900">{movie.title}</Typography>
            <Stack direction={'row'} spacing={2}>
              <Button className='movieDetailsButtons'>{parseFloat(movie.vote_average).toFixed(1)}</Button>
              <Button className='movieDetailsButtons' onClick={() => handleAddClick(movieStats)} ><img src={addIcon} alt='Add To List Icon'/></Button>
            </Stack>
            <Typography variant='h6' color={'white'} >Overview:</Typography>
            <Typography sx={{width:'700px'}} variant='p' color="#FFFFFF"> {movie.overview}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </ThemeProvider>
  </Box> 
  );
}
export default MovieDetails;




