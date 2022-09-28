import React from 'react';
import Singleservice from './Singleservice';

export default function Servicebox() {
  return (
    <>
      <div className="service-dispaly-section section-top-gap-150">
        <div className="box-wrapper">
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 offset-xl-3">
                  <div className="section-content section-content-gap-80 text-center">
                    <h6 className="section-tag tag-orange">Our Services</h6>
                    <h3 className="section-title">Provide awesome service for our customer</h3>
                    <span className="icon-seperator"><img
                      src="assets/images/icons/section-seperator-shape.png" alt="" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="service-items">

                    <Singleservice />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
