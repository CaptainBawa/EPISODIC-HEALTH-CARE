import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import CarouselSlider from './components/CarouselSlider';
import Products from './components/Products';
import Footer from './components/Footer';
import Testimonies from './components/Testimonies';
import Gallery from './components/Gallery';
import locationRoutes from './components/LocationRoutes';
import HealthcareDirections from './components/HealthcareDirections';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/AboutUs';

const App = () => (
  <BrowserRouter>
    <Header />
    <CarouselSlider />
    <Products />
    <Testimonies />
    <Gallery />
    <HealthcareDirections routes={locationRoutes} />
    <Contact />
    <Services />
    <About />
    <Footer />
    {/* <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes> */}
  </BrowserRouter>
);

export default App;
