import React from "react";

const Footer_top = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row p-0 m-0">
          <div className="col-lg-3 footer-before">
            <h6 className="text-uppercase">CONTACT US</h6>
            <ul className="py-4 f-text">
              <li>
                <i class="bi bi-geo-alt pe-2"></i>42 Dream House, Dreammy
                street, 7131 Dreamville, USA
              </li>
              <li>
                <i class="bi bi-envelope pe-2"></i>company@gmail.com
              </li>
              <li>
                <i class="bi bi-telephone pe-2"></i>456-456-4512
              </li>
              <li>
                <i class="bi bi-telegram pe-2"></i> Dream City, USA
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-before">
            <h6 className="text-uppercase">EXTRAS</h6>
            <ul className="py-4 f-text">
              <li>
                <a href="">Brands</a>
              </li>
              <li>
                <a href="">Gift Certificates</a>
              </li>
              <li>
                <a href="">Affiliate</a>
              </li>
              <li>
                <a href="">Specials</a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-before">
            <h6 className="text-uppercase">INFORMATION</h6>
            <ul className="py-4 f-text">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Delivery Information</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 footer-before">
            <h6 className="text-uppercase">MY ACCOUNT</h6>
            <ul className="py-4 f-text">
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Order History</a>
              </li>
              <li>
                <a href="">Wish List</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">Returns</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 footer-before">
            <h6 className="text-uppercase">NEWSLETTER</h6>
            <ul className="py-4 f-text">
              <li>Get Our Latest News And Special Sale</li>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your email address"
                  />
                  <button type="button" class="btn btn-danger mt-2 sub">
                    Subscribe
                  </button>
                </div>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_top;
