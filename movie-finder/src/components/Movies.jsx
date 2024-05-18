import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-grid-carousel';

const Movies = ({movies, sendDataToParent}) => {


  function handleClick(a) {
    sendDataToParent(a);
  }




  return (
    <Stack flexWrap={'wrap'} direction={"row"} spacing={2} sx={{marginLeft:'10px', alignContent:'center', justifyContent:'center'}}>
      <Carousel cols={8} rows={2} gap={2} loop containerStyle={{width:'90vw'}}>  
       
          {movies.map((result) => (
            <Carousel.Item className='carouselItem' key={result.id} >
                <Card className="MovieCard"  sx={{margin:'10px !important', width: "165px", height:'350px', backgroundColor:'black', borderRadius:'10px', border:'2px solid #F90;'}}>
                  <CardActionArea href={`/movies/${result.id}`} onClick={()=>{handleClick(result)}}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={`https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`}
                      alt="movie image"
                      sx={{borderRadius:'inherit'}}
                    />
                    <CardContent sx={{alignContent:'center', justifyContent:'center'}}>
                      <Typography gutterBottom variant="h6" component="div" textAlign={'center'} fontSize={'16px'} color={'#F90'}>
                        {result.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Carousel.Item> 
            ))}
        
      </Carousel> 
    </Stack>
  )
}

export default Movies