import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

function Home() {
  const navigate = useNavigate();
  let products = () => {
    navigate("/Products");
  };
  return (
    <div>
      <div className="col-lg-12 align-middle">
        <h1 className="text-center" style={{ color: "blue", marginTop: "40px" }}>
          Welcome to our Rental Portal
        </h1>
        <h4 className="text-center">
          You can Experience the new world by low cost
        </h4>
        <h6 className="text-center">
          Products we provide
          <br />
          Iphone,Cameras,Speaker,Bikes....
        </h6>
      </div>
      <div className="col-lg-12 text-center mt-5">
        <button
          type="button"
          class="btn btn-outline-primary  btn-lg"
          onClick={products}
          style={{ marginTop: "40px" }}
        >
          Select Products
        </button>
      </div>
      <div className="col-lg-12" style={{ marginTop: "100px" }}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
