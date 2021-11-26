import React from 'react';
import { NavLink } from "react-router-dom";
import Bg from "../../../image/ukrasheniia-novyi-god-rozhdestvo-christmas-new-year-decor-35.jpg";
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="headerWrapper">

        <div className="img-fluid"
                style={{
                background: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "100%",
                height :"100%"
                }}
            >
                <Container>
                <div
                    className="img-fluid d-flex justify-content-center align-items-center "
                >
                    <div className="text-center my-5 py-5">
                        <div>
                            <div className="mb-5"></div>
                        <h1 className="fw-bold" style={{color:"Yellow"}}>Welcome to Sparkling Giltters</h1>
                        <p className="my-4  fs-5 text-white fw-bold">
                        "Light is the first element of design; without it there is no color, form, or texture."<br></br>
                        <span className="text-danger">-Thomas E. Farin</span> 
                        </p>
                        </div>

                        <NavLink
                        to="/products"><button className="btn btn-warning fw-bold fs-5 px-5" style={{borderRadius:"25px"}}>Explore</button>
                        </NavLink>
                    </div>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;