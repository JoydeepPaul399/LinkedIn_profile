import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            {/* <Route to="/profile" element={<Profile/>} /> */}
            <Route path="/" element={<Profile />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
