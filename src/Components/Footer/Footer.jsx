import { Container } from 'react-bootstrap';
import styles from '../Footer/Footer.module.scss'
function Footer() {
    return ( 
       <footer className={styles.footer}>
        <Container>
        <p className={styles.copyright}>by Nijat Hamid</p>
        </Container>
       </footer>
     );
}
export default Footer;