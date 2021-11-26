import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Products from '../Shared/Products/Products';

const AllProducts = () => {
    return (
        <div style={{backgroundColor:"purple"}}>
        <Navigation></Navigation>
            <Container  className="my-3 ">
            <h2 className="py-5 fw-bold text-warning">All Products</h2>
          <Products></Products> 
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default AllProducts;