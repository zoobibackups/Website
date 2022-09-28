import React from 'react';
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <>
     <div className="subscribe-banner section-top-gap-150">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-6">
              <div className="content">
                <h6 className="big-text">Stay connect with us, get daily & weekly update.</h6>
              </div>
            </div>
            <div className="col-auto">
              <Link to="/contact" className="btn btn-lg btn-default icon-right">Subscribe Now <i className="icofont-double-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Newsletter;