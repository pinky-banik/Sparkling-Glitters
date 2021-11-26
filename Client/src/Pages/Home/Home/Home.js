import React from 'react';

import ProductHome from '../../Product/ProductHome/ProductHome';
import ReviewPage from '../../ReviewPage/ReviewPage';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ExtraSection from '../extraSection/ExtraSection';
import Header from '../Header/Header';
import "./home.css";



const Home = () => {
    return (
        <div className="home" >
        
        <Navigation></Navigation>
        <Header></Header>
        
      
          <h2 className="fs-1 fw-bold text-warning py-5">OUR FEATURE PRODUCTS</h2>
          {/* <Products></Products> */}
          <div>
          <ProductHome></ProductHome>
          </div>
          
          <div>
          <ExtraSection></ExtraSection>
          </div>
          <div>
          <ReviewPage></ReviewPage>
        </div>

        <Footer></Footer>
        </div>
        
    );
};

export default Home;