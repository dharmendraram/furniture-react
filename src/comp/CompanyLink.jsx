import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cdata from '../data/Cdata';

const CompanyLink = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
          items: 2
        }
      };
  return (
    <>
    {/* company link section start */}
<div className="container  py-3">

<Carousel 
arrows={false}
infinite={true}
autoPlay={true}
autoPlaySpeed={4000}
responsive={responsive}>
    {Cdata.map((a)=>(
  <div className='company-link py-4'>
  <img src={a.cimg} className='w-100' alt="" />
</div>

    ))}

</Carousel>
</div>
      {/* company link section end */}
    </>
  )
}

export default CompanyLink
