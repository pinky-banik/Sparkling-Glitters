import React, { useState } from 'react';
import {  Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../../../hooks/useAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../../Shared/Navigation/Navigation';
import "./login.css";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();
    

    const location = useLocation();
    const history = useHistory();

    const hanldeOnChange = e =>{
        const field = e.target.name;
        const value  = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    // google handle 
    const handleGoogleSignIn =  () =>{
        signInWithGoogle(location, history )
    }

    return (
        <div className="overflow-hidden login">
        <Navigation></Navigation>
        <Container className="h-75 w-75 mx-auto my-5 ">
           <Row  style={{ display:'flex', alignItems:'center'}}>
           <Col sm={12} lg={7}>
                    <img className="img-fluid" src="https://i.ibb.co/02jB9NJ/4957136.jpg" alt="This is login images" />
                </Col>
                <Col style={{boxShadow:'0 0 5px gray', padding: '12% 10%', borderRadius:'1%'}} sm={12} lg={5}>
                    <h1  className ="fw-bold">Login Here</h1>
                <Form onSubmit = {handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" onChange={hanldeOnChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" onChange={hanldeOnChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <button  className="btn btn-primary w-100" variant="primary" type="submit">
                        LOGIN
                    </button>
                    {
                    user?.email && <h3 className="text-success">Login Successfully</h3>
                }
                {
                    isLoading &&   <Spinner animation="grow" variant="primary" /> 
                }
                
                {authError && <h3 className="text-danger">{authError}</h3> }
                </Form>
                <p>New User ? <Link to  ='/signup'>Register Now</Link> </p>
                <p className="text-center mt-2">_____OR_____</p>
                <button   onClick={handleGoogleSignIn} className="btn btn-primary"> <FontAwesomeIcon style={{color:'black'}} icon={faGoogle} /> Log in with Google</button>
                </Col>
                
           </Row>
          
        </Container>
        
        </div>
    );
};

export default Login;