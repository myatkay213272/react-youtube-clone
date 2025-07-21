import { Stack, Box, Typography } from '@mui/material'
import {Sidebar,Video} from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useEffect, useState } from 'react';

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])

 


  return (
    <Stack sx={{ background : '#000',flexDirection: { xs: "column", md: "row" }}}>
      
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5 , color : '#fff'}}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box 
        p={2} 
        sx={{overflowY : 'auto' , height : '90vh' ,flex :2}}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{color:'white'}}
        >
          {selectedCategory} <span style={{ color : '#F31503' }}>videos</span>
        </Typography>

        <Video videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;

// h1 to h6	{Headings (large to small)}	<h1> to <h6>
// body1	(Normal paragraph text)	<p>
// body2	(Smaller paragraph text)	<p>
// subtitle1	(Slightly smaller title)	<h6>
// caption	(Small caption text)	<span>
// button	(Styled for buttons	)<span>

// flex : 2 (2 part of space) |         Right (2x)         |