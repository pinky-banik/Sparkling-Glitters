import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';



const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();


  const onSubmit = (data) => {
    

    axios
      .post("https://sparkling-glitters.herokuapp.com/reviews", data)

      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Added Succesfully!", "", "success");

          reset();
        }
      });
  };
 
    return (
        <div className="add-services ">
            <h2>Add Your Review</h2>
              
              
            <Form onSubmit={handleSubmit(onSubmit)} className=" shadow-lg w-75 mt-5 py-5 mx-auto">
            <input  className="p-2 mx-auto " {...register("name")} value={user.displayName} placeholder={user.displayName} required></input>
        <input  className="p-2 mx-auto " {...register("email")} value={user.email} placeholder={user.email} required></input>
        <input className="p-2 mx-auto " type="number" min="0" max="5" {...register('number')} placeholder="Rating out of 5" required/>
      
        <textarea {...register("description")} placeholder="Description" required /> <br />
        <button className="btn btn-primary my-2 "  type="submit">ADD TO DATABASE </button>
        <br />
      </Form>
        </div>
    );
};

export default Review;