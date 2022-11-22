
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/index'
import Favorites from './pages/Fav/index'
import Contact from './components/contact';
import About from './components/about';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Login from "./components/user/login";
import Register from "./components/user/signup";
import Login from "./components/user/login";
import {useState} from 'react';
import Quote from './pages/qoute/qoute';

function App() {
  const [save, setSave] = useState();

  const handleLogin = () => {
    setSave("test");
  };
  return (
    <div className="App">
         <Header/>
  <Routes>
                <Route path="/"  element = {<Home/>}></Route>
                <Route path="/favorites" element = {<Favorites/>}></Route>
                <Route path="/about"  element = {<About/>}></Route>
                <Route path="/contact" element = {<Contact/>}></Route>
                <Route path="/signup" element={ <Register />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/quote" element={ <Quote />} />
                {/* <Route path="/book" element={ <BookList />} /> */}
                {/* <Route path="/book/:id" element={<Bookdetails/>} /> */}


  </Routes>

         
    </div>
  );
}

export default App;
