import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return ( 
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
    <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#home">
            <img src="" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">من نحن</Nav.Link>
                <Nav.Link href="#home">لماذا </Nav.Link>
                <Nav.Link href="#home">أراء العملاء</Nav.Link>
                <Nav.Link href="#home">روابط التحميل</Nav.Link>
            </Nav>
            <div className="socialIcons">
                <img src="" alt="fb" />
                <img src="" alt="insta" />
                <img src="" alt="whts" />
            </div>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        </>
    );
}
export default Header;
