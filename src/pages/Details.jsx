import React from "react";
import Fdata from "../data/Fdata";
import { Link, useParams } from "react-router-dom";
import RelatedData from "../comp/RelatedData";

const Details = () => {
  const { id } = useParams();
  const data = Fdata.find((a) => a.id == id);
  return (
    <>
      {/* Details Section start */}
      <div className="container py-2">
        <div className="details text-dark">
          <ul className="ps-2 m-0 d-flex gap-2 py-2 align-items-center">
            <li>
              <Link to="/">
                {" "}
                <i class="bi bi-house-heart-fill "title="home page"></i>
              </Link>
            </li>
            <li className="align-items-center">
              <i class="bi bi-arrow-right-short "></i>{" "}
              <span className="fs-6 text-capitalize">{data.title}</span>{" "}
              <i class="bi bi-arrow-right-short "></i>{" "}
            </li>
          </ul>
        </div>

        <div className="row py-4 content-box">
          <div className="col-lg-4">
            <div className="card shadow border-0">
              <div className="img-box">
                <img src={data.img} className="w-100" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-5 content p-4">
            <h6 className="p-0 m-0 text-uppercase fw-bold">{data.title}</h6>
            <p className="p-0 m-0 text-secondary py-1">{data.discription}</p>
            <hr />
            <ul>
              <li>
                Brand:
                <span className="text-danger apple px-5 apple">Apple</span>
              </li>
              <li>
                Product Code: <span className="px-4">{data.productId}</span>
              </li>
              <li>
                Rewards Points:<span className="px-3">600</span>
              </li>
            </ul>
            <p className="pt-3">
              QTY:
              <input className="ms-3" type="text" />
            </p>
            <hr />
            <form action="" className="form-text">
              <div>
                <button type="button" className="btn btn-primary">
                  Add to cart
                </button>
                <button type="button" className="btn btn-secondary mx-1">
                  <i class="bi bi-heart-fill"></i>
                </button>
                <button type="button" className="btn btn-success">
                  <i class="bi bi-link-45deg"></i>
                </button>
              </div>
            </form>
            <hr />
          </div>

          <div className="col-lg-3 details-left">
            <div className="card border-0 rounded-1 bg-body-secondary p-4">
              <p className="p-0 m-0">
                Availability:{" "}
                <span className="text-success ps-2">In Stock </span>
              </p>

              <p className="text-dark fw-bold py-1 pt-3">${data.price}.00</p>

              <ul className="pt-2">
                <li>Ex Tax: $100.00</li>
                <li>Price in reward points: 400</li>
              </ul>
              <hr />

              <ul>
                <li>10 or more $107.60</li>
                <li>20 or more $94.40</li>
                <li>30 or more $81.20</li>
              </ul>
              <p className="py-2 pt-3"><i class="bi bi-star text-warning"></i><i class="bi bi-star ps-1 text-warning"></i><i class="bi bi-star px-1 text-warning"></i><i class="bi bi-star"></i> <span className="text-danger px-3">1-Review</span></p>
              <hr />
              <ul className="d-flex social-icon py-4">
                <li><a href=""><i class="bi bi-facebook "title="facebook"></i></a></li>
                <li><a href=""><i class="bi bi-twitter" title="twitter"></i></a></li>
                <li><a href=""><i class="bi bi-pinterest"title="pinterest"></i></a></li>
                <li><a href=""><i class="bi bi-linkedin"title="linkedin"></i></a></li>
                <li><a href=""><i class="bi bi-skype"title="skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <RelatedData />

      {/* Details Section end */}
    </>
  );
};

export default Details;
