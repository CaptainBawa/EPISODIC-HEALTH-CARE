import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CarouselSlider from './components/CarouselSlider';
import Products from './components/Products';
import LandingPage from './components/LandingPage';
import Testimonies from './components/Testimonies';
import Gallery from './components/Gallery';

const App = () => (
  <BrowserRouter>
    <Header />
    <CarouselSlider />
    <Products />
    <Testimonies />
    <Gallery />
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
