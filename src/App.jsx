import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function AppContent() {
  const mode = useSelector((state) => state.user.mode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}




function App() {
  

  return (
    <>
       <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
