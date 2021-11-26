import React from 'react';
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    

    axios
      .post("https://sparkling-glitters.herokuapp.com/products", data)

      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Publish on all products section!", "", "success");
          reset();
        }
      });
  };
    return (
        <div className="add-services ">
            <h2 className="text-warning fs-1 fw-bold"> Add a new product</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-75 m-5  mx-auto">
          <div
            className="p-3 mx-auto  bg-white form-main"
            style={{ borderRadius: "15px", maxWidth: "80 rem", maxHeight: "80 rem" }}
          >
            
            <Row>
              <InputGroup as={Col} md={6} sm={12} className="mb-3">
                <Form.Label
                  className="d-block w-100"
                  style={{ fontWeight: "bold" }}
                >
                  Service Title
                </Form.Label>
                <FormControl
                  id="upload"
                  type="text"
                  {...register("productName")}
                  placeholder="Product Name"
                />
              </InputGroup>
              <InputGroup as={Col} md={6} sm={12} className="mb-3">
                <Form.Label
                  className="d-block w-100"
                  style={{ fontWeight: "bold" }}
                >
                  Product Price
                </Form.Label>
                <FormControl
                  id="upload"
                  type="number"
                  {...register("productPrice")}
                  placeholder="Product Price"
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup as={Col} className="mb-3 col-md-6">
                <Form.Label
                  className="d-block w-100"
                  style={{ fontWeight: "bold" }}
                >
                   Add product's image url
                </Form.Label>
                <InputGroup.Text id="basic-addon1">
                <FontAwesomeIcon icon={faLink} />
                </InputGroup.Text>
                <FormControl
                  id="upload"
                  type="text"
                  {...register("image")}
                  placeholder="Add image"
                />
              </InputGroup>
            </Row>
            <Row>
              <Form.Group as={Col} md={12} sm={12} className="mr-md-5 col-md-6">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Description
                </Form.Label>
                <Form.Control
                  style={{ height: "10rem" }}
                  type="text"
                  as="textarea"
                  {...register("description", { required: true })}
                  placeholder="Description"
                />
              </Form.Group>
            </Row>

            <div className="text-center mt-4">
              <Button type="submit" className="submit-btn btn-main">
                Submit
              </Button>
            </div>
          </div>
        </Form>
        <Link to="/products"><button className="btn btn-primary">Go to all product Section</button></Link>




            {/* <form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-75 mt-5 py-5 mx-auto">
      
        <input {...register("productName")} placeholder="Product Name" required/>
        <textarea {...register("description")} placeholder="Description" required />
        <input
          type="number"
          {...register("productPrice")}
          placeholder=" Price" required
        />
        <input {...register("image")} placeholder="Add Image" />
        <button className="btn btn-primary" type="submit">ADD TO DATABASE </button>
        <br />
        
      </form> */}
        </div>
    );
};

export default AddProducts;