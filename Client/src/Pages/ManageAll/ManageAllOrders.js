import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const url = `https://sparkling-glitters.herokuapp.com/orders`
        fetch(url).then(res => res.json()).then(data => setOrders(data))
    },[]);
    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        orders.forEach((order) => {
          if (order._id === id) {
            order.status = status;
          }
          modifiedOrders.push(order);
        });
        setOrders(modifiedOrders);
        const modifiedStatus = { id, status };
    
        fetch("https://sparkling-glitters.herokuapp.com/updateOrderStatus", {
          method: "put",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(modifiedStatus),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              toast.success(<b style={{ color: "#198754" }}>Set to {status}</b>);
            } else {
              toast.error("something went wrong!");
            }
          })
          .catch((error) => toast.error(error.message));
      };
    
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
                  
                 
              } );
          }
        });

        
    }


    return (
        <>
           <Container>
            <h2>Manage All Orders : {orders.length} </h2>

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
      <td> ${order.productPrice}</td>
      <td>
            <select
                className={
                order.status === "Awaiting"
                    ? "btn btn-info"
                    : order.status === "Shipped"
                    ? "btn btn-success"
                    : "btn btn-info"
                }
                defaultValue={order.status}
                onChange={(e) =>
                handleStatusChange(order._id, e.target.value)
                }
            >
                {/* <option className="bg-white text-muted">Pending</option> */}
                <option className="bg-white text-muted">Awaiting</option>
                <option className="bg-white text-muted">Shipped</option>
            </select>
            </td>
      <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDelete(order._id)}>Delete</button></td>
          </tr>)
      }
  </tbody>
</Table>
        </Container> 
        </>
    );
};

export default ManageAllOrders;