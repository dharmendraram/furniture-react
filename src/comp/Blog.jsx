import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fdata from "../data/Fdata";
import { useParams,Link } from "react-router-dom";
const Blog = () => {
  const {id}=useParams()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* latest blog section start */}
      <section className="latest-blog py-4">
        <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-uppercase m-0 p-0">Latest Blog</h5>
            <div className="view-more">
              <a href="" className="btn btn-sm btn-danger text-light d-inline">
                View more <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <hr />
          <div className="py-2">
            <Carousel 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            responsive={responsive}
            >
              {Fdata.slice(29,33).map((a) => (
                <div className="main-blog d-flex justify-content-between py-5">
                    <div className="blog-img">
                    <img src={a.img} className="w-100" height={300} alt="" />
                    </div>
                    <div className="content-blog rounded-2  text-center border shadow bg-light p-5 m-3">
                        <h6><Link to={`/details/${a.id}`}>{a.title}</Link></h6>
                        <p className="py-1">{a.subtitle}</p>
                        <p>{a.discription}</p>
                        <Link to={`/details/${a.id}`} className="btn btn-danger btn-sm d-inline-block mt-2 text-light read-more">Read more</Link>
                    </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* latest blog section end    */}
    </>
  );
};

export default Blog;
