import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material'

import MyList from './components/MyList';
import HomePage from './components/HomePage'
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addValue, clearList, removeValue } from './redux/actions';

function App() {
  
  const array = useSelector(state => state.array);
  const dispatch = useDispatch();

  const handleAddClick = (a) => {
    dispatch(addValue(a));
    console.log(array);
  };

  const handleRemoveClick = (index) => {
    dispatch(removeValue(index));
    console.log(array);
  };

  const handleClearClick = () => {
    dispatch(clearList());
  };

  const [dataFromHome, setDataFromHome] = useState("");
  
  const [myListData, setmyListData] = useState([]);
  let myData = [""];

  const handleChildToParent = (data) => {
    console.log(data);
    setDataFromHome(data);
    
    console.log(dataFromHome);
     // Bu noktada dataFromHome henüz güncellenmemiş olabilir, çünkü useState asenkron çalışır
  };

  const handleDataFromDetails =(listdata) => {
    setmyListData(listdata);
    myData.push(listdata);
    console.log(myListData);
    // Add new value to the array
};

 /* 
  const [List, setList] = useState([]);


  useEffect(() => {
    console.log(List);
  }, [List]);

*/


  return (
    

    <BrowserRouter>
    <Box sx={{display:'flex', backgroundColor: '#000'}}>
        <Routes>
            <Route path="/" element={<HomePage sendDataToApp={handleChildToParent}/>} />
            <Route path= {`/movies/:${dataFromHome.id}`} element={ <MovieDetails  array={array} handleAddClick={handleAddClick} handleClearClick={handleClearClick} handleRemoveClick={handleRemoveClick} listItemsToApp={handleDataFromDetails} /> } />
            <Route path= {`/mylist`} element={ <MyList mydata={array} handleRemoveClick={handleRemoveClick}/> } />
            {/*       */}
        </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
