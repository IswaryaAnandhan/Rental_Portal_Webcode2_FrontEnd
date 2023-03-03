import React from "react";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <div className="col-lg-12 align-middle">
        <h1 className="text-center" style={{ color: "blue", marginTop: "40px" }}>
          Welcome to our Equipment Rental Portal
        </h1>
        <h4 className="text-center">
          You can Experience the new world by low cost
        </h4>
        <h6 className="text-center">
          Rental Products we provide
          <br />
          Car,Van,Auto,Cameras,Speaker,Bikes,Iphone,....
        </h6>
      </div>
      <div className="col-lg-12 text-center mt-5">
        <img className="equip" src="../image/equipment.jpg" alt="equip"/>       
      </div>
      <div className="col-lg-12" style={{ marginTop: "50px" , marginBottom:"50px" }}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
