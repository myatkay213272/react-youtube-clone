import {Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './components';

const App = () => (
    <Router>
        <Box>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>} />
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </Router>
)

export default App