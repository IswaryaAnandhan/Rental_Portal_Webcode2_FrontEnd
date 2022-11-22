import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Config } from "./Config";

function Contact() {
    const formik = useFormik({
        initialValues:{
            Name :"Name",
            Email:"Email",
            PhNo :"Phone Number",

        },
        onSubmit:async(values)=>{   
            let contact = await axios.post(`${Config.api}/Contacts`,values)
            alert("Thanks for contacting us,We'll call you Soon");
            formik.resetForm();
        }
    })
  return (
    <div id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="contact-r">
              <h1 class="display-4">Say Hi</h1>
              <form onSubmit={formik.handleSubmit} >
                <input type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name} required />
                <br />
                <input type="email" name="Email" onChange={formik.handleChange} value={formik.values.Email} required />
                <br />
                <input
                  type="text"
                  name="PhNo"
                  onChange={formik.handleChange} value={formik.values.PhNo}
                  required
                />
                <br />
                <button type="submit" class="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;