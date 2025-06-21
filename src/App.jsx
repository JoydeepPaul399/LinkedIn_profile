import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route to="/profile" element={<Profile/>} /> */}
          <Route path="/" element={<Profile/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
