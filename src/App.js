import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './Components';
// import { Navbar } from "./Components";
// import Feed from "./Components";
// import VideoDetail from "./Components";
// import { ChannelDetail } from "./Components";
// import SearchFeed from "./Components";
function App() {

  
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#181818' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
