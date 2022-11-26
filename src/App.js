

import "./sb-admin-2.min.css";
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from './Components/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Components/Products';
import CartItems from './Components/CartItems';
import Home from './Components/Home';
import Login from "./Components/Login";
import PortalLayout from "./Components/PortalLayout";
import AddProduct from "./Components/AddProduct";
import CreateProduct from "./Components/CreateProduct";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <div className="container">
   <BrowserRouter>
   <div className="row">
          <Routes>
          <Route path="/" element={<PortalLayout />}>
          <Route path="/" element={<Home/>}/>      
          <Route path="/Products" element={<Products/>}/>
          <Route path="/CartItems" element={<CartItems/>}/>   
          <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/create-product" element={<CreateProduct/>}/>
          <Route path="/edit-product/:id" element={<EditProduct/>}/>
          </Routes>
          </div>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
