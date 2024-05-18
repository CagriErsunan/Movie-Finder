import { ThemeProvider } from '@emotion/react'
import { AppBar, Box, Button, Divider, Stack, Typography, createTheme } from '@mui/material'
import React from 'react'
import movieFinder from '/assets/movieFinder.svg';
import deleteBtn from '/assets/delete.svg';
const theme = createTheme({
    typography: {
      fontFamily: ['Poppins'].join(','),
    },
  });

const MyList = ({mydata, handleRemoveClick}) => {

  console.log(mydata) ;

  

 
  return (
    <Stack sx={{width:'100vw'}}>
        <ThemeProvider theme={theme} >
        <Box sx={{ flexGrow: 1, display:'block', width:'100%' }}>
            <AppBar sx={{backgroundColor:'#000000'}} position="static">
                <Button href={`/`} sx={{width:'fit-content'}}>
                <Box id='siteFullIcon'><img  src={movieFinder} alt='full site icon'/></Box>
                </Button>
            </AppBar>
        </Box>

        
           
            <Stack direction={"column"} spacing={2}  sx={{alignItems:'start', justifyContent:'center', ml:'30%'}}  >
                <Typography variant='h3' color='#FF9900'>My List</Typography>
                <Typography variant='h6' color='#FF9900' >{mydata.length} items  on the list</Typography>


                {mydata.map((item, index)=>{
                    console.log(index);
                    return(<Stack key={index} spacing={2} direction={'row'} sx={{border:'2px solid #F90;', width:'fit-content', borderRadius:'25px', alignItems:'center' }}>
                        <Box sx={{color:'#FF9900', width:'40px', textAlign:'center'}}>{index+1}</Box>
                        <Divider  color='#FF9900'  orientation="vertical" flexItem />
                        <Box sx={{height:'60px', width:'45px', ml:'0px !important'}}><img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${item[0]}`} style={{height:"100%", width:"100%"}} alt='listed film poster'/></Box>
                        <Divider sx={{ml:'0px !important'}} color='#FF9900' orientation="vertical" flexItem />
                        <Typography sx={{color:'#FF9900', width:'350px'}}>{item[1]}</Typography>
                        <Divider color='#FF9900' orientation="vertical" flexItem />
                        <Button className='movieDetailsButtons' sx={{width:'55px !important', height:'55px !important', fontSize:'20px !important'}}>{parseFloat(item[2]).toFixed(1)}</Button>
                        <Divider color='#FF9900' orientation="vertical" flexItem />
                        <Button sx={{borderRadius:" 27px", background:"#F90", color:'black', width:"69px", height:"45px"}}>Film</Button>
                        <Divider color='#FF9900' orientation="vertical" flexItem />
                        <Button onClick={()=>handleRemoveClick(index)} sx={{height:'55px', width:'40px', mr:'10px !important'}}><img style={{height:'100%', width:'100%'}} src={deleteBtn} alt='delete button'/> </Button>
                    </Stack>);

                })}

            </Stack>    
       


        </ThemeProvider>
    </Stack> 
  );
}

export default MyList