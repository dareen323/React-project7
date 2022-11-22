import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {redirect, useNavigate} from 'react-router-dom';
import logo from '../../components/assets/logo.png';
import { useCookies } from 'react-cookie';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
// import logo from '../../components/assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
const MySwal = withReactContent(Swal);

function Header() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
    const [showBasic, setShowBasic] = useState(false);
    const [save, setSave] = useState("");
    
    const handelLogout = () => {
      removeCookie("currentUser");
     
    };
  return (
    <Navbar bg="" expand="lg" className='header op'  >
      <Container>
      <div className='d-flex'>
      <img className="logo" src={logo} alt="logoBook"/>
        <Navbar.Brand href="/" className='logo1 fs-5' >BrandBook</Navbar.Brand>
       
      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/about" >About</Nav.Link>
            <Nav.Link href="/contact" >Contact</Nav.Link>
            {cookies.currentUser != null && (
                    <Nav.Link onClick={()=>navigate('/favorites')} className="button "><span className='fa fa-heart'></span> Favorite</Nav.Link>
                  )} 
            
            {/* <Nav.Link onClick={()=>navigate('/')}className="button">Search by Google</Nav.Link> */}
          </Nav>
          <div className='d-flex'>
          <Nav>
                {cookies.currentUser == null && (
                  <Link to={"/login"}> <Button variant="success" className='mx-2 p-2'>Login</Button></Link>
                )}
              </Nav>
            
              <Nav>
                <Link to={"/"}>
                  {cookies.currentUser != null && (
                    <Button
                      variant="success"
                      style={{
                        backgroundColor: "#59CE8F",
                      }}
                      onClick={handelLogout}
                      className="bo"
                    >
                      
                      Logout
                    </Button>
                  )} 
                </Link>
              </Nav>
            
              {cookies.currentUser == null && (
             <Button href="/signup" variant="success" className='mx-1 p-2'>Register</Button>
                  )} 
           
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;