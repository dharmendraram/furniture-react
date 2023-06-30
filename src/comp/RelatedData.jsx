import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fdata from '../data/Fdata';
import { Link, useParams } from 'react-router-dom'
const RelatedData = () => {
    const {id}=useParams()
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };    
  return (
    <>
    <section className="treanding-content py-5">
      <div className="container ">
        <div className="tranding-items d-flex justify-content-between align-items-center">
          <h5 className="text-uppercase p-0 m-0">Related Products</h5>
          
      </div>
          <hr/>
          <Carousel 
 infinite={true}
autoPlay={true}
autoPlaySpeed={5000}
 responsive={responsive}>
    {Fdata.map((item)=>(
    <div className='my-3 tslider'>
        <Link to={`/details/${item.id}`}>
        <div className="card shadow mx-3 text-center justify-content-between ">
            <div className="img-box">
                <img src={item.img} className='w-100' height={200} alt="" />
            </div>
            <div className="card-text py-2 text-center ">
                      <p className="text-warning"><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></p>
                      <p className="text-uppercase card-title fw-bold">{item.title}</p>
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
 
</Carousel>   

</div>
</section>  
      
    </>
  )
}

export default RelatedData
