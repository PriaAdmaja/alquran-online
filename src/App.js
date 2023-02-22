import './App.css';
import MainLayout from './components/layouts/main.layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainSurah from './components/surah/main.surah';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailSurah from './components/surah/detail.surah';
import { Container } from 'react-bootstrap';
import Homepage from './components/homepage/main.homepage';
import DetailJuz from './components/juz/detail.juz';
import Juz from './components/juz/main.juz';


function App() {
  return (
    <>
      <Router>
        <MainLayout />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/surah' element={<MainSurah />} />
            <Route path='/surah/:id' element={<DetailSurah />} />
            <Route path='/juz' element={<Juz />} />
            <Route path='/juz/:id' element={<DetailJuz />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
