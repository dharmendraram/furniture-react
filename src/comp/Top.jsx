import React from "react";

const Top = () => {
  return (
    <>
      {/* top section start */}
      <section className="top py-1">
        <div className="container text-light">
          <div className="row">
            <div className="col-lg-8">
              <div className="d-flex align-items-center">
                <div className="top-left pt-1">
                  <ul className="d-flex gap-3 ">
                    <li>
                      <a href="">
                        <i class="bi bi-twitter"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="bi bi-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="top-right ms-3 pt-1">
                  <ul className="d-flex gap-3">
                    <li>
                      <i class="bi bi-geo-alt-fill"></i>One Infinity Loop Av, Tk
                      123456
                    </li>
                    <li>
                      {" "}
                      <i class="bi bi-telephone"></i>123456789
                    </li>
                    <li>
                      <i class="bi bi-envelope"></i>company@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
                <div className="main-top d-flex justify-content-end align-items-center">
              <div className="top-side p-0 m-0">
                <div class="dropdown">
                  <a
                    class="btn  dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bi bi-flag-fill pe-2"></i> English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bi bi-flag-fill pe-2"></i>
                        Nepali
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="top-icon p-0 m-0">
              <div class="dropdown">
                  <a
                    class="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <span className="fw-bold">$ </span> Currency
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                      <span className="fw-bold">€</span> Euro
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                    
                      <span className="fw-bold">$</span> Dollor
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top section end  */}
    </>
  );
};

export default Top;
