import { Container, Row, Col } from "react-bootstrap";
import styles from './User.module.scss';
import axios from "axios";
import { useEffect, useState } from "react";
function User() {

    const [userList, setUserList] = useState([])
    const [userErr, setUserErr] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUserList(response.data))
            .catch(error => setUserErr(error.message))
    }, [])

    return (
        <section id={styles.user_api} className='pb-5 pt-5'>
            <Container>
                <h1 className={styles.heading}>User API via Jasonplaceholder</h1>
                <Row>
                   {
                    userList.length > 0 ? userList.map(user =>
                    <Col lg={3} key={user.id}>
                        <div className={styles.user_api_single}>
                            <div className={styles.user_api_title}>Name: <span className={styles.user_api_value}>{user.name}</span></div>
                            <div className={styles.user_api_title}>Username: <span className={styles.user_api_value}>{user.username}</span></div>
                            <div className={styles.user_api_title}>Email: <span className={styles.user_api_value}>{user.email}</span></div>
                            <div className={styles.user_api_title}>Adress: <span className={styles.user_api_value}>{user.address.street}</span></div>
                            <div className={styles.user_api_title}>Phone: <span className={styles.user_api_value}>{user.phone}</span></div>
                            <div className={styles.user_api_title}>Website: <span className={styles.user_api_value}>{user.website}</span></div>
                        </div>
                    </Col>
                    ) : <div>{userErr}</div>
                   }
                </Row>
            </Container>
        </section>
    );
}

export default User;