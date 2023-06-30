import React from 'react'
import F3data from '../data/F3data'
const Feature3 = () => {
  return (
    <section className='container'>
     {/* box banner2 section  */}
     <div className="row">
            {F3data.map((a) => (
              <div className="col-lg-6 p-2">
                <div className="box-banner">
                  <a href="">
                    <img className="w-100" src={a.f3img} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
      {/* box banner2 section  */}
      
    </section>
  )
}

export default Feature3
