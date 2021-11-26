import React, { useEffect, useState } from 'react';
import {  Container ,Col, Form, Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import "./purchase.css";
import Swal from "sweetalert2";

const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const {user} = useAuth();
    const initialInfo = {ownerName: user.displayName, email: user.email, phone:'' }
    const [bokkingInfo, setBookingInfo] = useState(initialInfo);


   
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bokkingInfo};
        newInfo[field]=value;
        setBookingInfo(newInfo);
    }


    const handleProductConfirm = e =>{
        const clientOrder = {
            ...bokkingInfo,
            productName,
            image,
            productPrice
        }

       fetch('https://sparkling-glitters.herokuapp.com/orders', {
           method: 'post',
           headers: {
               'content-type' : 'application/json'
           },
           body:JSON.stringify(clientOrder)
       })
       .then(res => res.json())
       .then(data => {
           if(data.insertedId){
            Swal.fire("Ordered Succesfully!", "", "success");
           }
       })

        e.preventDefault();
        e.target.reset();
       
    }


    // destactirn productiD
    const {productName, productPrice, image,description} = product;

   useEffect(()=>{
       fetch(`https://sparkling-glitters.herokuapp.com/products/${productId}`)
       .then(res => res.json())
       .then(data => setProduct(data));
   }, [productId])
    return (
        <>
        <Navigation></Navigation>
            <div className="productWrapper text-center">
                <div className="productInner pt-5 ">
                    <h1 className="pt-5 mt-3 font-weight-bold">Product Details</h1>
                     <Link to="/"><button className="btn btn-warning">Go back</button> </Link>
                </div>
                <div className="productOverlay"></div>
            </div>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <img src={image} alt="" className="img-fluid" />
                        <div className="pt-3">
                            <Row>
                                <img src="" alt="" />
                            </Row>
                        </div>
                        <div className="my-3">
                                <h3 className="font-weight-bold darkIndigoText">{productName}</h3>
                                <h2 className="font-weight-bold indigoText text-right fw-bold">Price: $ {productPrice}</h2>
                                <p className="text-black">{description}</p>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <div className="px-1 pt-5 pb-2">
                            <Form onSubmit={handleProductConfirm}>
                                <Form.Group>
                                    <Form.Control onBlur={handleOnBlur} size="lg" value={user.displayName} type="name" name="name" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleOnBlur} size="lg" type="number" name="number" placeholder="Phone No." required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleOnBlur} size="lg" value={user.email} type="email" name="email" placeholder="Email Address" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleOnBlur} size="lg" as="textarea" name="message" rows={3} type="text" placeholder="Message" required />
                                </Form.Group>
                                <button  type="submit" size="lg" className="btn indigoBtn form-control btn-warning fw-bold" >Place Order</button>


                                
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Footer></Footer>
        </>
    );
};

export default Purchase;