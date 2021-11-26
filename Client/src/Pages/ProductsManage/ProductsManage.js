import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from "sweetalert2";
const ProductsManage = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://sparkling-glitters.herokuapp.com/products')
        .then(res => res.json()).then(data => setProducts(data))
        .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: "Please, try again",
            });
          });
    },[])


    //delete mathod

    const handleDelete = id =>{
        const url = `https://sparkling-glitters.herokuapp.com/products/${id}`;  

        Swal.fire({
            icon: "warning",
            title: "Are you sure to delete this product?",
            showCancelButton: true,
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'delete'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        const remaining = products.filter(product =>  product._id !== id);
                        setProducts(remaining);
                        Swal.fire("Deleted!", "", "success");
                    }
                    
                   
                } );
            }
          });

        
    
    };

    return (
        <div>
            <h2>Manage All Products</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Image</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {
          products.map(product => <tr 
          key={product._id}
          > 
       
      <td><img width="100px" height="50px" src={product.image} alt="" /></td>
      <td>{product.productName}</td>
      <td>${product.productPrice}</td>
      <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDelete(product._id)}>Delete</button></td>
          </tr>)
      }
  </tbody>
</Table>
        </div>
    );
};

export default ProductsManage;