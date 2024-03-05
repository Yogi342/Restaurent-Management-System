import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Footer from '../Components/Footer'
import Header1 from '../Components/Header1'
import { useNavigate } from 'react-router-dom'

function Service() {
  const redirect=useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  }

  return (
    <div>
      <Header1 title={"Service"} />
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            {
              data.map((value, index, arr) => {

                return (
                  <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded pt-3">
                      <div className="p-4">
                        {/* <i className="fa fa-3x fa-user-tie text-primary mb-4" /> */}
                        <img src={value.cate_Image} width="50%" height="90px" alt="" />
                        <h5>{value.Name}</h5>
                        <a className="btn btn-square" onClick={()=>redirect('/view_services/'+ value.id )} href="javascript:void(0)"><i className="fa fa-arrow-right" /></a>
                        <p>Diam elitr kasd sed at </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
      {/* Service End */}
      <Footer />
    </div>

  )
}

export default Service