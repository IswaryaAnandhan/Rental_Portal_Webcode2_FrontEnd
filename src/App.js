import logo from './logo.svg';
import './App.css';
import "./sb-admin-2.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from './Components/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launch from './Components/Home';
import Products from './Components/Products';
import CartItems from './Components/CartItems';
import Home from './Components/Home';

function App() {
  return (
    <div className="container">
   <BrowserRouter>
   <div className="row">
        <div className="col-lg-12">
          <Topbar/>
          </div>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/CartItems" element={<CartItems/>}/>
          </Routes>
          </div>
   </BrowserRouter>
    
    </div>
  );
}

export default App;
