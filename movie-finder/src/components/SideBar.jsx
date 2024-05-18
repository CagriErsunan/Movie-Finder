import {Stack, ThemeProvider, createTheme} from '@mui/material'
import Divider from '@mui/material/Divider';

import HomeIcon from '/assets/home.svg'
import ListIcon from '/assets/list.svg'
import Button from '@mui/material/Button';
import {categories} from '../utils/constants'
import { useState } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
});


const SideBar = ({selectedGenre, setSelectedGenre}) => {

  const[movies, setMovies] = useState([]);

  const noGenre = "%20&without_genres=%20";

  
  return (
    <ThemeProvider theme={theme}>
    <Stack direction={'column'} sx={{display:'inline-flex !important', backgroundColor:'#000', width:'194px !important', height:'100%',alignContent: 'flex-start',  alignItems:'center', justifyContent:'center', gap:'10px', pt:'1rem'}}>
      
      <Button className='btnNav' sx={{ "&:hover": {
      backgroundColor:  '#4A4A4A' ,
    }, textAlign:'start' }} onClick={()=>{setSelectedGenre(noGenre)}}>
        <div className='Icons'><img className='sideIcon' src={HomeIcon} alt='Home Icon'  /></div>
        <span className='BtnTxt'>Home</span>
      </Button>

      <Button href='/mylist' className='btnNav' sx={{ "&:hover": {
      backgroundColor:  '#4A4A4A' ,
    }}}>
        <div className='Icons'><img className='sideIcon' src={ListIcon} alt='Home Icon'  /></div>
        <span className='BtnTxt'>My List</span>
      </Button>  
      
      <Divider sx={{color:'white', opacity:'0.2', width:'90%'}} variant="middle" component="button" />

      <span style={{fontSize:'12px', textAlign:'left', color:'white', alignSelf:'start', paddingLeft:'0.5rem', fontFamily:'Poppins, sans-serif' }}>GENRES</span>
      
      {categories.map((category)=>(
        <Button className='btnNav' sx={{ "&:hover": {
      backgroundColor:  '#4A4A4A' ,
    }}} key={category.id} onClick={()=>{setSelectedGenre(category.id)}}>
          <span className='BtnTxt'>{category.name}</span>
        </Button>
      ))}

    </Stack></ThemeProvider>
  ) 
}

export default SideBar