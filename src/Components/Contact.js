import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Config } from "./Config";

function Contact() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      PhNo: "",
    },
    onSubmit: async (values) => {
      let contact = await axios.post(`${Config.api}/Contacts`, values);
      alert("Thanks for contacting us,We'll call you Soon");
      formik.resetForm();
    },
  });
  return (
    <div id="contact">
      <div className="container">
      <h3 className="text-center" style={{ color: "blue" }}>
            Contact with me
          </h3>
        <div className="row">
        <div className="col-lg-2" ></div>
        <div className="col-lg-4 card">
          <img
          className="card-img-top"
          src="https://www.internetbling.com/wp-content/uploads/2019/08/contactme.jpg"
          alt="image"
          width={"40px"}
          height="400px"
        /></div> 
          <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit} className="col-lg-8">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.Name}
              placeholder="Enter your name"
              required
            />
            <br /> <label>Email</label>
            <input
              type="email"
              name="Email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.Email}
              placeholder="Enter your email Id"
              required
            />
            <br /> <label>Phone No</label>
            <input
              type="text"
              name="PhNo"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.PhNo}
              placeholder="Enter your Phone number"
              required
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
