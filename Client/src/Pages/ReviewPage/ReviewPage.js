import React, { useEffect, useState } from 'react';
import { Row ,Container } from 'react-bootstrap';
import RveviewShow from './ReviewShow/ReviewShow';
import Bg from "../../image/background.jpg";


const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://sparkling-glitters.herokuapp.com/reviews').then(res => res.json()).then(data => setReviews(data));
    },[])
    return (
        <div className="py-5" style={{
            backgroundImage: `url(${Bg})`,
            backgroundColor: "white"
           }}>
               
            <Container className="w-75 mx-auto">
            <h1 className="py-3 text-warning fs-1 fw-bold">Users Review</h1>
            <Row xs={1} md={2} lg={3} className="g-4 ">
            {reviews.map(review=><RveviewShow
            key = {review._id}
            review = {review}
            ></RveviewShow>)}
            </Row>
            </Container>
        </div>
    );
};

export default ReviewPage;