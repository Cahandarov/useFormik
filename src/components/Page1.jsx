import img1 from "../assets/Group 187.png";
import img2 from "../assets/logo2.png";
import { useContext } from "react";
import { FormikContext } from "./Context";

export default function Page1({ showPage2, hidePage1 }) {
  const formik = useContext(FormikContext);

  return (
    <div id="page1">
      <div className="pagehead">
        <img src={img1} alt="logo" />
        <button id="clone_btn">Clone now</button>
      </div>
      <div className="pagecenter">
        <p className="text70034">Get a project quote</p>
        <p className="text40018 textcenter">
          Please fill the form below to receive a quote for your project. Feel
          <br />
          free to add as much detail as needed.
        </p>
        <div className="formBox">
          <div className="formtop">
            <div className="circle filled">1</div>
            <div className="rectangle notfilled">
              <div className="halffilled_rectangle"></div>
            </div>
            <div className="circle notfilled">2</div>
            <div className="rectangle empty_rec"></div>
            <div className="circle notfilled">3</div>
            <div className="rectangle empty_rec"></div>
            <div className="circle notfilled">4</div>
          </div>

          <div className="form_center">
            <p className="text70024">Contact details</p>
            <p className="text40018">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </p>
          </div>

          <div className="form_bottom">
            <div className="form_bottom_column">
              <label htmlFor="name" className="text50018">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="John Carter"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <label htmlFor="phone" className="text50018">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input"
                placeholder="(123) 456 - 7890"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>

            <form className="form_bottom_column">
              <label htmlFor="email" className="text50018">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input"
                name="email"
                placeholder="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <label htmlFor="company" className="text50018">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="input"
                name="company"
                placeholder="Company name"
                value={formik.values.company}
                onChange={formik.handleChange}
              />
            </form>
          </div>
        </div>
        <button
          id="next_step"
          onClick={() => {
            showPage2((prev) => !prev);
            hidePage1((prev) => !prev);
          }}
        >
          Next step
        </button>
      </div>
      <div id="page1bottom">
        <div id="page1bottomLEFT">
          <img src={img2} alt="logo2" />
          <p className="text40018">
            Copyright © 2021 BRIX Templates | All Rights Reserved
          </p>
        </div>
        <div id="page1bottomRIGTH">
          <input
            type="email"
            id="subscribe_email"
            placeholder="Enter your email"
            className="text40018"
          />
          <button id="btn_subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
