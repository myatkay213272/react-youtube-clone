import {Box} from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <Box sx={{backgroundColor : '#000'}}>
            Navbar
            <Routes>
                <Route path="/" exact element={}/>
            </Routes>
        </Box>
    </Router>
)

export default App