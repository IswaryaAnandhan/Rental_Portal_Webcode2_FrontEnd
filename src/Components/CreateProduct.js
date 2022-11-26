
import axios from "axios";
import { useFormik } from "formik";
import { Config } from './Config'
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  let navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image:"",
      quantity:"",
      hours:""
    },
    validate: (values) => {
      let error = {};
      if (!values.name) {
        error.name = "Please enter the Product Name";
      }

      if (!values.price) {
        error.price = "Please enter the Price";
      }

      if (!values.image) {
        error.image = "Please add the image url";
      }

      if (!values.quantity) {
        error.quantity = "Please enter the quantity";
      }

      if (!values.hours) {
        error.hours = "Please enter the hours";
      }
   
      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${Config.api}/Products`,values);
        alert("Added Successfully");
        navigate('/addproduct')
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <br/> <br/>  <br/>
        <h2>Create Products Form</h2>
      </div>
      <br/>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-8">
            <div className="form-group">
              <label>Name*</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.name && formik.errors.name
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Price*</label>
              <input
                name="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.price && formik.errors.price ? "error-box" : ""
                } ${
                  formik.touched.price && !formik.errors.price
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.price && formik.errors.price ? (
                <span style={{ color: "red" }}>{formik.errors.price}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Product Image*</label>
              <input
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.image && formik.errors.image ? "error-box" : ""
                } ${
                  formik.touched.image && !formik.errors.image
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.image&& formik.errors.image ? (
                <span style={{ color: "red" }}>{formik.errors.image}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Quantity*</label>
              <input
                name="quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.quantity}
                type={"number"}
                className={`form-control form-control-user ${
                  formik.touched.quantity && formik.errors.quantity ? "error-box" : ""
                } ${
                  formik.touched.quantity && !formik.errors.quantity
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <span style={{ color: "red" }}>{formik.errors.quantity}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Hours*</label>
              <input
                name="hours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hours}
                type={"number"}
                className={`form-control form-control-user ${
                  formik.touched.hours && formik.errors.hours ? "error-box" : ""
                } ${
                  formik.touched.hours && !formik.errors.hours
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.hours && formik.errors.hours ? (
                <span style={{ color: "red" }}>{formik.errors.hours}</span>
              ) : null}
            </div>
          </div>
          
          <div className="col-lg-12">
            <div className="form-group">
              <input type={"submit"} className="btn btn-success" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
