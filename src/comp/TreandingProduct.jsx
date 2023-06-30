import React from 'react'
import Tslider from './Tslider'

const TreandingProduct = () => {

  return (
    <>
    {/* treanding section start */}
     <section className="treanding-content py-5">
      <div className="container ">
        <div className="tranding-items d-flex justify-content-between align-items-center">
          <h5 className="text-uppercase p-0 m-0">TRENDING PRODUCTS</h5>
          <div className="bottons d-flex gap-2 justify-content-center">
      <a href='' type="button" class=" text-uppercase text-dark">Featured</a>
      <a href='' type="button" class=" text-uppercase">Bestseller</a>
      <a href='' type="button" class=" text-uppercase">latest</a>
      </div>
      </div>
          <hr/>
       
<Tslider/>
</div>
</section>    
{/* treanding section end   */}
    </>
  )
}

export default TreandingProduct
