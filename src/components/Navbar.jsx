import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
       <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-sm">
                <Container className='gap-5'>
                        <Link className='fs-5 text-decoration-none text-dark' to="/">e_com</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto gap-4">
                                <Link className='fs-6 text-decoration-none text-dark' to="/">Home</Link>
                                <Link className='fs-6 text-decoration-none text-dark' to="/cart">Cart</Link>
                            </Nav>
                            <Nav>
                                <Link className='fs-6 text-decoration-none text-dark' to="/cart">Cart Score = 0</Link>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
             </Navbar>
       </>
    )
}

export default Header