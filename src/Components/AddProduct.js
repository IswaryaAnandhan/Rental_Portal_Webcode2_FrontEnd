import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Config } from './Config';
import Loading from "./Loading";

function AddProduct() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [productId, setProductId] = useState(null);
  let navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);   
        const products = await axios.get(`${Config.api}/Products`);    
        setProductList(products.data);
        setLoading(false);
      } catch (error) {
        alert("something went wrong");
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${Config.api}/Products/${id}`);
      const pIndex = productList.findIndex((p) => p.id == id);
      productList.splice(pIndex, 1);
      setProductList([...productList]);
      alert("Deleted Successfully");
    } catch (error) {
      alert("something went wrong");
    }
  };
  const EditProduct = async (id) => {
    try {
      const product = await axios.put(`${Config.api}/Products/${id}`);
      setProductId(id);
    } catch (error) {
      alert("something went wrong");
    }
  };
  const logout=()=>{
    navigate("/");
  }
  return (
    <div className="container-fluid">
      <br/>  <br/>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0">Product Details</h1>
      <div className="card-header py-3">
            <Link
          to={"/create-product"}
          className=" btn btn-primary"
        >Create Product
        </Link>
          </div>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      </div>
      {isLoading ?<Loading/> : (
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th> 
                    <th>Image url</th> 
                    <th>Action</th>            
                  </tr>
                </thead>
                <tbody>
                  {productList.map((user) => {
                    return (                  
                      <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.price}</td>
                        <td>{user.image}</td>
                        <td>               
                          <Link
                            to={`/edit-product/${user._id}`}
                            onClick={() => EditProduct(user._id)}
                            className="btn btn-secondary mr-1 mb-1"
                          >
                            Edit
                          </Link>
                          <button
                              onClick={() =>  deleteProduct(user._id)}
                              className="btn btn-danger m-1"
                            >
                              Delete
                            </button>
                        </td>
                      </tr>
                    );
                  })}
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default AddProduct;
