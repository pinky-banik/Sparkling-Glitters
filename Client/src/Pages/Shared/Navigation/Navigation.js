import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../image/logo.png";
import "./Navigation.css";

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
<Navbar variant="dark" className="sticky-top" expand="lg" style={{backgroundColor:"black"}}>
<Container>
<Navbar.Brand><Nav.Link as={NavLink} to="/home" href="#"><img className="w-10" src={logo} alt="" /><span class="title text-warning fs-2 fw-bold"> Sparkling Glitters</span> </Nav.Link></Navbar.Brand>


<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

   
    <Nav className="ms-auto">
      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as={Link} to="/">Home</Nav.Link>
      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as={Link} to="/products">Products</Nav.Link>

      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as ={NavLink} to="/about" >About Us</Nav.Link>
      <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as ={NavLink} to="/contact" >Contact</Nav.Link>
      {
          user?.email && 
          <Nav.Link style={{color:'#DFFF00', fontWeight:'600'}}  as ={NavLink} to="/mainboard" ><Button style={{borderRadius:"50px"}} className="btn btn-success"  >Dashboard</Button></Nav.Link>
      }
      {
          user?.email ? 
          <Nav.Link><Button className="btn btn-danger" style={{ fontWeight:'600', borderRadius:"50px"}} onClick={logOut}   >LogOut </Button></Nav.Link>
          :
          <Button style={{fontWeight:'600'}} className="btn btn-warning" as ={NavLink} to="/login">Login</Button>
      }
      {
          user?.email && <Nav.Link style={{fontWeight:'600' , borderRadius:"50px"}}  as ={NavLink} to="/mainboard" >{user.displayName}</Nav.Link>
      }
    </Nav>

</Navbar.Collapse>
</Container>
</Navbar>

    );
};

export default Navigation;