import { Stack, Box, Typography } from '@mui/material'
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }}}>
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5 , color : '#fff'}}
        >
          Copyright 2022 JSM Media
        </Typography>
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