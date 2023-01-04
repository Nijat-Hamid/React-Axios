import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import styles from '../Products/Products.module.scss'

function Products() {
    const [products, setProduct]= useState([])
    const [errProduct,setErrProduct]= useState('');

    useEffect(()=>{
        axios.get('https://dummyjson.com/products?limit=24')
        .then(response => {setProduct(response.data.products);console.log(response.data.products)})
        .catch(error => setErrProduct(error.message))
    },[])
    return ( 
    <section id={styles.product_api} className='pb-5 pt-5'>
        <Container>
            <h2 className={styles.heading}>Products API via Dummyjason</h2>
            <Row>
                {
                    products.length > 0 ? products.map(product=>
                        <Col lg={3} key={product.id}>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.card_title}>{product.title}</h4>
                                <div className={styles.card_desc}>{product.description}</div>
                                <div className={styles.card_price}>Price: {product.price} <span className={styles.card_stock}>Stock: {product.stock}</span></div>
                                <div className={styles.card_brand}>Brand: {product.brand} <span className={styles.card_category}>{product.category}</span></div>
                            </div>
                        </div>
                    </Col>
                  ) : <div>{errProduct}</div>
                }
            </Row>
        </Container>
    </section> 
    );
}

export default Products;