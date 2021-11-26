import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import Bg from "../../../image/background.jpg";


const ProductHome = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://sparkling-glitters.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            const slice = data.slice(0, 6)
            setProducts(slice)});
    },[])
    return (
        <div className="py-5" style={{
            backgroundImage: `url(${Bg})`
          }}>
            <Container className="mx-auto w-75 pb-5">
            <Row xs={1} md={2} lg={3} className="g-4 ">
            {products.map(product=><Product
            key = {product._id}
            product = {product}
            ></Product>)}
            </Row>
             <Link to="/products"><button className="btn btn-primary my-5">Explore All Products</button></Link>
            </Container>
        </div>
    );
};

export default ProductHome;