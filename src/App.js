import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar/Navbar';
import SearchFeed from './components/SearchFeed';
import VideoDetails from './components/VideoDetails';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='video/:id' element={<VideoDetails/>} />
          <Route path='search/:searchInput' element={<SearchFeed/>} />
      </Routes>
    </>
  );
}

export default App;
