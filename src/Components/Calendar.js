import axios from "axios";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Config } from "./Config";
import { UserContext } from "./Context";

function Calendar({ id }) {
  const cartitems = useContext(UserContext);
  let a = cartitems.CartItems;

  const formik = useFormik({
    initialValues: {
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let hrs = await axios.post(`${Config.api}/hours/${id}`, values);
      console.log(hrs.data);
      let index = a.findIndex((cart) => cart._id == id);
      console.log(index);
      a[index].hours = hrs.data;
      cartitems.setCartItems([...a]);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          Start Date: 
          <input
            width={"50px"}
            type="date"
            name="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 mt-2">
          End Date:
          <input
            width={"50px"}
            type="date"
            name="endDate"
            onChange={formik.handleChange}
            value={formik.values.endDate}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <input type={"submit"} value="Add" className="btn btn-primary mt-2" />
      </div>
    </form>
  );
}

export default Calendar;
