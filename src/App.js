
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/index'
import Favorites from './pages/Fav/index'
import Contact from './components/contact';
import About from './components/about';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
         <Header/>
  <Routes>
                <Route path="/"  element = {<Home/>}></Route>
                <Route path="/favorites" element = {<Favorites/>}></Route>
                <Route path="/about"  element = {<About/>}></Route>
                <Route path="/contact" element = {<Contact/>}></Route>
            </Routes>
            <Footer/>
    </div>
  );
}

export default App;
