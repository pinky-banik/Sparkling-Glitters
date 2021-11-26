import React, { useEffect, useState  } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Swal from "sweetalert2";
const ManageOrder = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    // const { productName, ownerName, productPrice}

    useEffect(()=>{
        const url = `https://sparkling-glitters.herokuapp.com/orders?email=${user.email}`
        fetch(url).then(res => res.json()).then(data => setOrders(data))
    },[user.email]);

    const handleDelete = id =>{
        const url = `https://sparkling-glitters.herokuapp.com/orders/${id}`;
        
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
                  const remaining = orders.filter(order =>  order._id !== id);
                  setOrders(remaining);
                  Swal.fire("Deleted!", "", "success");
                  }
                  ;
              } );
          }
        });

    }
    return (
        <Container>
            <h2>My Orders: {orders.length} </h2>

            <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Image</th>
      <th>Owner Name</th>
      <th>Product Name</th>
      <th>Email</th>
      <th>Price</th>
      <th>Status</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {
          orders.map(order => <tr 
          key={order._id}
          > 
       
      <td><img width="100px" height="50px" src={order.image} alt="" /></td>
      <td>{order.ownerName}</td>
      <td>{order.productName}</td>
      <td>{order.email}</td>
      <td>${order.productPrice}</td>
      <td>
                    <button
                      style={{ width: "100px" }}
                      className={
                        order.status === ""
                          ? "btn btn-danger"
                          : order.status === "Shipped"
                          ? "btn btn-success"
                          : "btn btn-info"
                      }
                    >
                      {order.status}
                    </button>
                  </td>
      <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDelete(order._id)}>Delete</button></td>
          </tr>)
      }
  </tbody>
</Table>
        </Container>
    );
};

export default ManageOrder;