import img1 from "../assets/Group 187.png";
import img2 from "../assets/logo2.png";
import developmentImg from "../assets/development.svg";
import marketingImg from "../assets/marketing.svg";
import webdesignImg from "../assets/webdesign.svg";
import otherImg from "../assets/other.svg";
import { useContext } from "react";
import { FormikContext } from "./Context";

export default function Page2({ hidePage2, showPage3, showPage1 }) {
  const formik = useContext(FormikContext);

  return (
    <div id="page2">
      <div className="pagehead">
        <img src={img1} alt="logo" />
        <button id="clone_btn2">Clone now</button>
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
            <div className="rectangle notfilled">
              <div className="halffilled_rectangle"></div>
            </div>
            <div className="circle notfilled">3</div>
            <div className="rectangle empty_rec"></div>
            <div className="circle notfilled">4</div>
          </div>

          <div className="form_center">
            <p className="text70024">Our services</p>
            <p className="text40018">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </p>
          </div>

          <div className="form_bottom">
            <div className="form_bottom_column">
              <label className="text50018">
                <input
                  type="checkbox"
                  id="development"
                  name="services"
                  value="development"
                  onChange={formik.handleChange}
                  className="checkbox"
                />
                <div className="checkbox_backround checkbox_TOP">
                  <div className="circleIN_checkbox">
                    <img src={developmentImg} alt="img" />
                  </div>
                  <p className="text50018">Development</p>
                </div>
              </label>

              <label className="text50018">
                <input
                  type="checkbox"
                  id="marketing"
                  name="services"
                  value="marketing"
                  onChange={formik.handleChange}
                  className="checkbox"
                />
                <div className="checkbox_backround marketing">
                  <div className="circleIN_checkbox">
                    <img src={marketingImg} alt="img" />
                  </div>
                  <p className="text50018">Marketing</p>
                </div>
              </label>
            </div>
            <div className="form_bottom_column">
              <label className="text50018">
                <input
                  type="checkbox"
                  id="webdesign"
                  name="services"
                  value="webdesign"
                  onChange={formik.handleChange}
                  className="checkbox"
                />
                <div className="checkbox_backround checkbox_TOP">
                  <div className="circleIN_checkbox">
                    <img src={webdesignImg} alt="img" />
                  </div>
                  <p className="text50018">Web Design</p>
                </div>
              </label>

              <label className="text50018">
                <input
                  type="checkbox"
                  id="other"
                  name="services"
                  value="other"
                  onChange={formik.handleChange}
                  className="checkbox"
                />
                <div className="checkbox_backround marketing">
                  <div className="circleIN_checkbox">
                    <img src={otherImg} alt="" />
                  </div>
                  <p className="text50018">Other</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="buttonsBOX">
          <button
            id="previus_step"
            onClick={() => {
              showPage1((prev) => !prev);
              hidePage2((prev) => !prev);
            }}
          >
            Previous step
          </button>{" "}
          <button
            id="next_step2"
            onClick={() => {
              showPage3((prev) => !prev);
              hidePage2((prev) => !prev);
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
            id="subscribe_email2"
            placeholder="Enter your email"
            className="text40018"
          />
          <button id="btn_subscribe2">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
