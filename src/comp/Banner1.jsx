import React from 'react'
import F2data from "../data/F2data";
const Banner1 = () => {
  return (
    <>
       {/* box banner section  */}
       <div className="row">
            {F2data.map((a) => (
              <div className="col-lg-6 p-2">
                <div className="box-banner">
                  <a href="">
                    <img className="w-100" src={a.f2img} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        
      {/* feature section end */}
    </>
  )
}

export default Banner1
