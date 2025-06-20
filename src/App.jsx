import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route to="/profile" element={<Profile/>} /> */}
          <Route path="/" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
