import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
const ReviewShow = ({review}) => {
    const {name,email, description, number } = review;
    return (
        <div>
            <Col>
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <p>{email}</p>
              
              <b><Rating
                    initialRating={number}
                    readonly
                    emptySymbol={
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={emptyStar}
                      />
                    }
                    fullSymbol={
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={fullStar}
                      />
                    }
                  />
                  </b>
                  <br></br>
              <p className="card-text">{description}</p>
              
             
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default ReviewShow;