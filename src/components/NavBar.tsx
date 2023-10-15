import { Container, Nav, Button, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './NavBar.css';

export function NavBar() {
    return (
        <NavbarBs className="bg-primary shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} className="nav-link">
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink} className="nav-link">
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink} className="nav-link">
                        About
                    </Nav.Link>
                </Nav>
                <Button></Button>
            </Container>
        </NavbarBs>
    )
}
