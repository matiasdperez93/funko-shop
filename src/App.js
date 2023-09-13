import { Route, Routes, Link} from 'react-router-dom';
//routes
import ProductDetail from './routes/ProductDetail';
import Contacto from './routes/Contacto';
import Section from './routes/Section';
//components
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Banner/>
        <Routes>
            <Route exact path='/' element={<Section/>} />
            <Route path='/product/:productID' element={<ProductDetail/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
