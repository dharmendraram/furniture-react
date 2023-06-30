import React from "react";
import Fdata from "../data/Fdata";
import { Link, useParams } from "react-router-dom";
const SofaSet = () => {
    const {id}=useParams()
  return (
    <>
    {/* category section sofa start */}
    <div className="details text-dark container">
          <ul className="ps-2 m-0 d-flex gap-2 py-2 align-items-center">
            <li>
              <Link to="/">
                {" "}
                <i class="bi bi-house-heart-fill "title="home page"></i>
              </Link>
            </li>
            <li className="align-items-center">
              <i class="bi bi-arrow-right-short "></i>{" "}
              <span className="fs-6 text-capitalize">Seat Sofas</span>{" "}
              <i class="bi bi-arrow-right-short "></i>{" "}
            </li>
          </ul>
        </div>
      <section className="popular-content pb-4">
        <div className="container shadow p-3">
         
            <h4 className="text-uppercase m-0 p-0 fs-5 pt-2">Seat Sofas</h4>
            
          <hr />
          <div className="row">
            {Fdata.slice(3,15).map((item) => (
              <div className="col-lg-2 col-sm-6 col-md-3  py-4 hidden-icon">
                <Link to={`/details/${item.id}`}>
                  <div className="card my-1 bg-light">
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
      {/* category sofa section end  */}
    </>
  )
}

export default SofaSet
