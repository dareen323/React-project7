import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import logo from '../../components/assets/logo.png';
import './styles.css'
function Header() {
    const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className='header'>
      <Container>
      
    
        <Navbar.Brand href="/" className='logo1'>BrandBook</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link onClick={()=>navigate('/favorites')}className="button">Favorite</Nav.Link>
           
          </Nav>
          <div>
            <Button variant="success">Login</Button>{' '}
            <Button variant="success">Register</Button>{' '}
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;