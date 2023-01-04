import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from '../Header/Header.module.scss'

function Header() {
    return ( 
        <header className={styles.header}>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className="ms-auto">React via Axios</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} className={styles.nav_link} to="/">User API</Nav.Link>
                <Nav.Link as={Link} className={styles.nav_link} to="/products">Products API</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </header>
     );
}
export default Header;