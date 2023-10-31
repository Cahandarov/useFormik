import img1 from "../assets/Group 187.png";
import img2 from "../assets/logo2.png";
import backroundImage from "../assets/page4formbox.png";

export default function Page4({ showPage3, hidePage4 }) {
  return (
    <div id="page4">
      <div className="pagehead">
        <img src={img1} alt="logo" />
        <button id="clone_btn4">Clone now</button>
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
            <div className="rectangle filled"></div>
            <div className="circle filled">4</div>
          </div>

          <div className="form_center_Page4">
            <img src={backroundImage} alt="" id="page4formback" />
            <p className="text70024">Submit your quote request</p>
            <p className="text40018 textcenter">
              Please review all the information you previously typed in
              <br /> the past steps, and if all is okay, submit your message to
              <br />
              receive a project quote in 24 - 48 hours.
            </p>
            <input type="submit" id="page4_btn_sbt" value="Submit" />
          </div>
        </div>
      </div>
      <button
        id="previus_step3"
        onClick={() => {
          showPage3((prev) => !prev);
          hidePage4((prev) => !prev);
        }}
      >
        Previous step
      </button>
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
            id="subscribe_email4"
            placeholder="Enter your email"
            className="text40018"
          />
          <button id="btn_subscribe2">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
