import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Feed/>} />
      </Routes>
    </>
  );
}

export default App;
