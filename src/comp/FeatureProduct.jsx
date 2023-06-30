import React from "react";
import Fdata from "../data/Fdata";

import { Link, useParams } from "react-router-dom";
import Banner1 from "./Banner1";

const FeatureProduct = () => {
  const {id}=useParams()
  return (
    <>
      {/* feature section start */}
      <section className="popular-content py-5">
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-uppercase m-0 p-0">POPULAR CATEGORIES</h5>
            <div className="view-more">
              <a href="" className="btn btn-sm btn-danger text-light">
                View more <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            {Fdata.slice(0, 12).map((item) => (
              <div className="col-lg-2 col-sm-6 col-md-3  py-4 hidden-icon">
                <Link to={`/details/${item.id}`}>
                  <div className="card my-2 bg-light">
                    <div className="card-img">
                      <img className="w-100 d-block" src={item.img} alt="" />
                    </div>
                    <div className="card-text py-2 text-center ">
                      <p className="text-warning">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </p>
                      <p className="text-uppercase card-title fw-bold">
                        {item.title}
                      </p>
                      <p className="text-danger">${item.price}</p>
                    </div>
                    <div className="icon-box d-flex text-danger gap-3 text-center">
                      <div className="box-icon pt-1">
                        <a href="">
                          <i class="bi bi-heart"></i>
                        </a>
                      </div>
                      <div className="box-icon pt-1">
                        <a href="">
                          <i class="bi bi-reception-4"></i>
                        </a>
                      </div>
                      <div className="box-icon pt-1">
                        <a href="">
                          <i class="bi bi-basket2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <Banner1 />
      </div>
    </>
  );
};

export default FeatureProduct;
