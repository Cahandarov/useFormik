import React from "react";
import img1 from "../assets/Group 187.png";
import img2 from "../assets/logo2.png";
import { useContext } from "react";
import { FormikContext } from "./Context";

export default function Page3({ showPage2, hidePage3, showPage4 }) {
  const formik = useContext(FormikContext);

  return (
    <div id="page3">
      <div className="pagehead">
        <img src={img1} alt="logo" />
        <button id="clone_btn3">Clone now</button>
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
            <div className="rectangle filled"></div>
            <div className="circle filled">2</div>
            <div className="rectangle filled"></div>
            <div className="circle filled">3</div>
            <div className="rectangle notfilled">
              <div className="halffilled_rectangle"></div>
            </div>
            <div className="circle notfilled">4</div>
          </div>

          <div className="form_center">
            <p className="text70024">What’s your project budget?</p>
            <p className="text40018">
              Please select the project budget range you have in mind.
            </p>
          </div>

          <div>
            <div className="form_bottom">
              <div className="form_bottom_column">
                <div className="columnbox">
                  <input
                    type="radio"
                    name="budget"
                    id="fivetousand"
                    value="5000-10000"
                    className="radio"
                    onChange={formik.handleChange}
                  />
                  <p className="text50018">$5.000 - $10.000</p>
                </div>
                <div className="columnbox">
                  <input
                    type="radio"
                    name="budget"
                    id="twentytousand"
                    value="20000-50000"
                    className="radio"
                    onChange={formik.handleChange}
                  />
                  <p className="text50018">$20.000 - $50.000</p>
                </div>
              </div>

              <div className="form_bottom_column">
                <div className="columnbox">
                  <input
                    type="radio"
                    name="budget"
                    id="tentousand"
                    value="10000-20000"
                    className="radio"
                    onChange={formik.handleChange}
                  />
                  <p className="text50018">$10.000 - $20.000</p>
                </div>
                <div className="columnbox">
                  <input
                    type="radio"
                    name="budget"
                    id="fiftytousand"
                    value="50000+"
                    className="radio"
                    onChange={formik.handleChange}
                  />
                  <p className="text50018">$50.000 +</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsBOX">
          <button
            id="previus_step2"
            onClick={() => {
              showPage2((prev) => !prev);
              hidePage3((prev) => !prev);
            }}
          >
            Previous step
          </button>{" "}
          <button
            id="next_step3"
            onClick={() => {
              showPage4((prev) => !prev);
              hidePage3((prev) => !prev);
            }}
          >
            Next step
          </button>
        </div>
      </div>
      <div id="page1bottom">
        <div id="page1bottomLEFT">
          <img src={img2} alt="logo2" id="logo2" />
          <p className="text40018">
            Copyright © 2021 BRIX Templates | All Rights Reserved
          </p>
        </div>
        <div id="page1bottomRIGTH">
          <input
            type="email"
            id="subscribe_email3"
            placeholder="Enter your email"
            className="text40018"
          />
          <button id="btn_subscribe2">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
