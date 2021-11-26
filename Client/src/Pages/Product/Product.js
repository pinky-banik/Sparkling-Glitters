import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Product = ({product}) => {
    const {_id,  productName, productPrice,image } = product;
    return (
      <div className="container  ">
        <Col>
          <Card>
            <Card.Img variant="top" src={image} width="100%" height="200px" />
            <Card.Body>
              <Card.Title>{productName}</Card.Title>
              <h5 className="fw-bold">Price: ${productPrice} </h5>
              <Link to={`/purchase/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Product;